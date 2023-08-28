import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { Accordion } from '@digdir/design-system-react';
import { Select } from '@catalog-frontend/ui';
import { AssignedUser, CodeList, Status } from '@catalog-frontend/types';
import { convertCodeListToTreeNodes, localization as loc } from '@catalog-frontend/utils';
import { action, useSearchDispatch } from '../../context/search';
import { PublishedFilterType } from '../../context/search/state';
import styles from './search-filter.module.css';
import { CheckboxGroupFilter } from './checkbox-group-filter';
import { AccordionItem, AccordionItemProps } from '../accordion-item';
import { useGetUsers } from '../../hooks/users';
import { CheckboxTreeFilter } from './checkbox-tree-filter';

interface Props {
  subjectCodeList?: CodeList;
}

const SearchFilter = ({ subjectCodeList }: Props) => {
  const router = useRouter();
  const catalogId = `${router.query?.catalogId}`;
  const searchDispatch = useSearchDispatch();
  const [assignedUserIdValue, setAssignedUserIdValue] = useState('');

  const statusItems = [
    { value: 'utkast' as Status, label: loc.status.draft },
    { value: 'høring' as Status, label: loc.status.hearing },
    { value: 'godkjent' as Status, label: loc.status.approved },
  ];
  const nameAndConceptItems = [
    { value: 'Egenskapsnavn', label: 'Egenskapsnavn' },
    { value: 'Forretningsbegrep', label: 'Forretningsbegrep' },
  ];
  const publicationStateItems = [
    { value: 'published' as PublishedFilterType, label: loc.publicationState.published },
    { value: 'unpublished' as PublishedFilterType, label: loc.publicationState.unpublished },
  ];

  const { data: getUsers } = useGetUsers(catalogId);
  const assignedUserItems: AssignedUser[] = getUsers?.users;

  const handleOnStatusChange = (names: string[]) => {
    searchDispatch(action('SET_CONCEPT_STATUS', { filters: { status: names.map((name) => name as Status) } }));
  };

  const handleOnNameAndConceptChange = (names: string[]) =>
    searchDispatch(action('SET_NAME_AND_CONCEPT', { filters: {} }));

  const handlePublicationOnChange = (names: string[]) =>
    searchDispatch(
      action('SET_PUBLICATION_STATE', { filters: { published: names.map((name) => name as PublishedFilterType) } }),
    );

  const handleOnAssignedChange = (userId: string) => {
    const assignedUser: AssignedUser = assignedUserItems.find((item) => item.id === userId);
    searchDispatch(action('SET_ASSIGNED_USER', { filters: { assignedUser } }));
    setAssignedUserIdValue(assignedUser.id);
  };

  const handleSubjectOnCheck = (values: string[]) => {
    searchDispatch(action('SET_SUBJECTS', { filters: { subject: values } }));
  };

  const accordionItemContents: AccordionItemProps[] = [
    {
      header: loc.subjectArea,
      content: (
        <CheckboxTreeFilter
          nodes={convertCodeListToTreeNodes(subjectCodeList)}
          onCheck={handleSubjectOnCheck}
        />
      ),
    },
    {
      header: loc.conceptStatus,
      content: (
        <CheckboxGroupFilter<Status>
          items={statusItems}
          filterName='status'
          onChange={handleOnStatusChange}
        />
      ),
    },
    {
      header: loc.assigned,
      content: (
        <Select
          options={
            assignedUserItems ? [...assignedUserItems.map((item) => ({ label: item.name, value: item.id }))] : []
          }
          onChange={handleOnAssignedChange}
          value={assignedUserIdValue}
        />
      ),
    },
    {
      header: loc.publicationState.state,
      content: (
        <>
          <p>
            {loc.publicationState.description}
            <br />
            <br />
          </p>
          <CheckboxGroupFilter<PublishedFilterType>
            items={publicationStateItems}
            filterName='published'
            onChange={handlePublicationOnChange}
          />
        </>
      ),
    },
    {
      header: loc.nameAndConcept,
      content: (
        <CheckboxGroupFilter<string>
          items={nameAndConceptItems}
          filterName='nameAndConcept'
          onChange={handleOnNameAndConceptChange}
        />
      ),
    },
  ];

  const accordionItems = accordionItemContents.map((item) => (
    <AccordionItem
      key={`accordion-item-${item.header}`}
      {...item}
    />
  ));

  return (
    <div className={styles.searchFilter}>
      <Accordion
        border={true}
        className={styles.accordion}
      >
        {accordionItems}
      </Accordion>
    </div>
  );
};

export default memo(SearchFilter);