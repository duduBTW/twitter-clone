import type { AppProps } from "next/app";

// components
import { Global } from "@emotion/react";
import Layout from "components/layout";
import { SessionProvider } from "next-auth/react";

// styles
import "sanitize.css";
import "../../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import globalStyles from "constants/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout user={pageProps.session}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
