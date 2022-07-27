import type { AppProps } from "next/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { TweetProps, UserProps } from "./home";

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

const TweetImageModalContext = createContext<{
  openModal: (tweet: TweetProps, position?: number) => void;
  closeModal: () => void;
  open: TweetProps | null;
  selectedImage: [number, Dispatch<SetStateAction<number>>];
} | null>(null);
export const useTweetImageModal = () => {
  var state = useContext(TweetImageModalContext);

  if (!state) throw new Error("");

  return state;
};
const useTweetImageModalProvider = () => {
  const [open, setOpen] = useState<TweetProps | null>(null);
  const selectedImage = useState(0);
  const setSelectedImage = selectedImage[1];

  const openModal = (tweet: TweetProps, position: number = 1) => {
    setOpen(tweet);
    setSelectedImage(position);
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    setOpen(null);
    setSelectedImage(0);
    document.body.style.overflowY = "auto";
  };

  return { openModal, closeModal, selectedImage, open };
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TweetImageModalContext.Provider value={useTweetImageModalProvider()}>
      <SessionDataContext.Provider value={pageProps.session}>
        <SessionProvider session={pageProps.session}>
          <Layout user={pageProps.session}>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </SessionDataContext.Provider>
    </TweetImageModalContext.Provider>
  );
}

export default MyApp;
