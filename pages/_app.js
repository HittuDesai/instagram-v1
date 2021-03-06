import Head from 'next/head';
import { MantineProvider, AppShell, Navbar } from '@mantine/core';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import PageHeader from '../components/PageHeader';
import AnchorTags from '../components/AnchorTags';
import hamburgerIcon from '../atoms/hamburgerAtom';
import PageNavbar from '../components/PageNavbar';
export default function App({ Component, 
  pageProps: {session, ...pageProps}
}) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'dark',
          }}
        >
          <RecoilRoot>
            <AppShell
            styles={{
              main: {
                  width: "100vw",
                  height: "100vh",
                  padding: "0",
                  margin: "0",
              }
            }}
            navbarOffsetBreakpoint="sm"
            header={<PageHeader />}
            navbar={<PageNavbar />}
            >
              <Component {...pageProps} />
            </AppShell>
          </RecoilRoot>
        </MantineProvider>
    </>
  );
}
