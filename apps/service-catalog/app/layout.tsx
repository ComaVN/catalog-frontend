import { Layout, NextAuthProvider, ReactQueryClientProvider } from '@catalog-frontend/ui';
import { localization } from '@catalog-frontend/utils';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: localization.catalogType.concept,
  description: localization.catalogType.concept,
};

const font = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const catalogAdminUrl = process.env.CATALOG_ADMIN_BASE_URI;
  return (
    <html lang={localization.getLanguage()}>
      <body>
        <NextAuthProvider>
          <Layout
            className={font.className}
            catalogAdminUrl={catalogAdminUrl}
          >
            {children}
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;