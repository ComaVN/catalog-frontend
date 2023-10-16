import { getOrganization } from '@catalog-frontend/data-access';
import { Organization, ChangeRequest, Concept } from '@catalog-frontend/types';
import { hasOrganizationReadPermission, validOrganizationNumber } from '@catalog-frontend/utils';
import { authOptions } from '../../api/auth/[...nextauth]';
import { Session, getServerSession } from 'next-auth';
import { ChangeRequestPage } from './[changeRequestId]/_change-request-form';
import jsonpatch from 'fast-json-patch';
import { useCreateChangeRequest } from '../../../hooks/change-requests';

const NewConceptSuggestion = ({
  FDK_REGISTRATION_BASE_URI,
  organization,
  changeRequest,
  changeRequestAsConcept,
  originalConcept,
  showOriginal,
}) => {
  const changeRequestMutateHook = useCreateChangeRequest({ catalogId: organization.organizationId });
  return (
    <ChangeRequestPage
      FDK_REGISTRATION_BASE_URI={FDK_REGISTRATION_BASE_URI}
      organization={organization}
      changeRequest={changeRequest}
      changeRequestAsConcept={changeRequestAsConcept}
      originalConcept={originalConcept}
      showOriginal={showOriginal}
      changeRequestMutateHook={changeRequestMutateHook}
    />
  );
};

export async function getServerSideProps({ req, res, params }) {
  const FDK_REGISTRATION_BASE_URI = process.env.FDK_REGISTRATION_BASE_URI;

  const { catalogId } = params;

  const session: Session = await getServerSession(req, res, authOptions);

  const hasPermission = session && hasOrganizationReadPermission(session?.accessToken, catalogId);

  if (!hasPermission) {
    return {
      redirect: {
        permanent: false,
        destination: `/${catalogId}/no-access`,
      },
    };
  }

  if (!validOrganizationNumber(catalogId)) {
    return { notFound: true };
  }

  const organization: Organization = await getOrganization(catalogId).then((res) => res.json());

  const changeRequest: ChangeRequest = {
    id: '',
    catalogId: catalogId,
    conceptId: null,
    status: 'OPEN',
    operations: [],
  };
  const originalConcept: Concept = {
    id: null,
    ansvarligVirksomhet: { id: organization.organizationId },
    seOgså: [],
  };

  const changeRequestAsConcept = jsonpatch.applyPatch(
    jsonpatch.deepClone(originalConcept),
    jsonpatch.deepClone(changeRequest.operations),
    false,
  ).newDocument;

  return {
    props: {
      organization,
      changeRequest,
      changeRequestAsConcept,
      originalConcept,
      showOriginal: false,
      FDK_REGISTRATION_BASE_URI,
    },
  };
}

export default NewConceptSuggestion;