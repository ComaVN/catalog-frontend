'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styles from './code-lists.module.css';
import { Accordion, Heading } from '@digdir/design-system-react';
import { BreadcrumbType, Breadcrumbs, Button, SearchField, useWarnIfUnsavedChanges } from '@catalog-frontend/ui';
import { PlusCircleIcon } from '@navikt/aksel-icons';
import { useGetAllCodeLists } from '../../../../../hooks/code-lists';
import { CodeList, Organization } from '@catalog-frontend/types';
import { getTranslateText, localization } from '@catalog-frontend/utils';
import { useAdminDispatch, useAdminState } from '../../../../../context/admin';
import { Banner } from '../../../../../components/banner';
import CodeListEditor from '../../../../../components/code-list-editor';
import { PageLayout } from '../../../../../components/page-layout';
import { compare } from 'fast-json-patch';

export interface CodeListsPageClientProps {
  catalogId: string;
  organization: Organization;
  codeListsInUse: string[];
}

const CodeListsPageClient = ({ catalogId, organization, codeListsInUse }: CodeListsPageClientProps) => {
  const adminDispatch = useAdminDispatch();
  const adminContext = useAdminState();
  const { showCodeListEditor, updatedCodeLists, updatedCodes } = adminContext;

  const [search, setSearch] = useState('');
  const [dirtyCodeLists, setDirtyCodeLists] = useState<string[]>([]);

  const { data: getAllCodeLists } = useGetAllCodeLists({
    catalogId: catalogId,
  });
  const dbCodeLists = useMemo(() => getAllCodeLists?.codeLists ?? [], [getAllCodeLists]);

  const filteredCodeLists = () =>
    dbCodeLists.filter((codeList: CodeList) => codeList.name.toLowerCase().includes(search.toLowerCase()));

  useWarnIfUnsavedChanges({
    unsavedChanges:
      updatedCodeLists?.some((codeList) => {
        const dbCodeList = dbCodeLists.find((list) => list.id === codeList.id);
        if (!dbCodeList) {
          return true;
        }
        return compare(dbCodeList, codeList).length > 0;
      }) ?? dirtyCodeLists.length > 0,
  });

  useEffect(() => {
    // Adds a copy of the codes in context
    const updatedCodesAccumulator = { ...updatedCodes };

    dbCodeLists.forEach((codeList: CodeList) => {
      if (codeList) {
        updatedCodesAccumulator[codeList.id ?? ''] = codeList?.codes ?? [];
      }
    });

    adminDispatch({
      type: 'SET_UPDATED_CODES',
      payload: { updatedCodes: updatedCodesAccumulator },
    });
  }, [dbCodeLists]);

  const breadcrumbList = catalogId
    ? ([
        {
          href: `/catalogs/${catalogId}`,
          text: localization.manageCatalog,
        },
        {
          href: `/catalogs/${catalogId}/concepts`,
          text: localization.catalogType.concept,
        },
        {
          href: `/catalogs/${catalogId}/concepts/code-lists`,
          text: localization.catalogAdmin.codeLists,
        },
      ] as BreadcrumbType[])
    : [];

  const handleCreateCodeList = () => {
    adminDispatch({ type: 'SET_SHOW_CODE_LIST_EDITOR', payload: { showCodeListEditor: true } });
    adminDispatch({
      type: 'SET_UPDATED_CODES',
      payload: { updatedCodes: { ...updatedCodes, ['0']: [] } },
    });
  };

  return (
    <>
      <Breadcrumbs breadcrumbList={breadcrumbList} />
      <Banner
        title={localization.catalogAdmin.manage.conceptCatalog}
        orgName={`${getTranslateText(organization?.prefLabel)}`}
        catalogId={catalogId}
      />
      <PageLayout>
        <div className={styles.row}>
          <SearchField
            ariaLabel='Søkefelt kodeliste'
            placeholder='Søk etter kodeliste...'
            onSearchSubmit={(search) => setSearch(search)}
          />
          <div className={styles.buttons}>
            <Button
              icon={<PlusCircleIcon />}
              onClick={handleCreateCodeList}
            >
              {localization.catalogAdmin.createCodeList}
            </Button>
          </div>
        </div>
        <Heading
          level={2}
          size='xsmall'
        >
          {localization.catalogAdmin.codeLists}
        </Heading>
        <div className='accordionStructure'>
          {showCodeListEditor && (
            <Accordion
              key={'codeList-create-edtior'}
              border={true}
              className='accordionWidth'
            >
              <Accordion.Item defaultOpen={showCodeListEditor}>
                <Accordion.Header>
                  <Heading size='small'></Heading>
                </Accordion.Header>

                <Accordion.Content>
                  <CodeListEditor
                    type='create'
                    catalogId={catalogId}
                  />
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          )}
          {filteredCodeLists() &&
            filteredCodeLists()?.map((codeList: CodeList, index: number) => (
              <Accordion
                key={index}
                border={true}
                className='accordionWidth'
              >
                <Accordion.Item>
                  <Accordion.Header>
                    <Heading size='xsmall'>{codeList.name}</Heading>
                    <p className={styles.description}> {codeList.description} </p>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className={styles.id}>ID: {codeList.id}</p>
                  </Accordion.Content>

                  <Accordion.Content>
                    <CodeListEditor
                      codeList={codeList}
                      codeListsInUse={codeListsInUse}
                      catalogId={catalogId}
                      dirty={(dirty) =>
                        setDirtyCodeLists((prev) => {
                          if (dirty && !prev.includes(codeList.id ?? '')) {
                            return [...prev, codeList.id ?? ''];
                          }
                          if (!dirty) {
                            return prev.filter((id) => id !== codeList.id);
                          }
                          return prev;
                        })
                      }
                    />
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            ))}
        </div>
      </PageLayout>
    </>
  );
};

export default CodeListsPageClient;
