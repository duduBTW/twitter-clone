import type { AppProps } from "next/app";
import { createContext, useContext } from "react";
import { UserProps } from "./home";

// components
import { Global } from "@emotion/react";
import Layout from "components/layout";
import { SessionProvider } from "next-auth/react";

// styles
import "sanitize.css";
import "../../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import globalStyles from "constants/globalStyles";

const SessionDataContext = createContext<UserProps | null>(null);
export const useSessionData = () => useContext(SessionDataContext);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionDataContext.Provider value={pageProps.session}>
      <SessionProvider session={pageProps.session}>
        <Layout user={pageProps.session}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </SessionDataContext.Provider>
  );
}

export default MyApp;
