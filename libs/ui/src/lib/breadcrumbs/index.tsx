import { hashCode, localization } from '@catalog-frontend/utils';
import StyledBreadcrumbs, { InternalLink, ExternalLink, Separator, DeactiveLink } from './styled';

export type BreadcrumbType = {
  href: string;
  text: string;
};

/* eslint-disable-next-line */
export interface BreadcrumbsProps {
  baseURI?: string;
  breadcrumbList?: BreadcrumbType[];
}

const Breadcrumbs = ({ baseURI, breadcrumbList }: BreadcrumbsProps) => {
  return (
    <div className='container'>
      <StyledBreadcrumbs>
        <span>
          <ExternalLink
            aria-label={localization.allCatalogs}
            href={baseURI || '/'}
          >
            {localization.allCatalogs}
          </ExternalLink>
          {breadcrumbList &&
            breadcrumbList.map((breadcrumb, i) => {
              return (
                <span key={hashCode(breadcrumb.href)}>
                  <Separator>{'>'}</Separator>
                  {i === breadcrumbList.length - 1 ? (
                    <DeactiveLink>{breadcrumb.text}</DeactiveLink>
                  ) : (
                    <InternalLink href={breadcrumb.href}>{breadcrumb.text}</InternalLink>
                  )}
                </span>
              );
            })}
        </span>
      </StyledBreadcrumbs>
    </div>
  );
};

export { Breadcrumbs };
