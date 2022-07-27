import styled from "@emotion/styled";
import { FC, PropsWithChildren, useState } from "react";
import { useKeyPressEvent } from "react-use";
import { Portal } from "react-portal";

// components
// @ts-ignore
import { ColorExtractor } from "react-color-extractor";
import Sidebar from "components/sidebar";
import { mq } from "constants/theme";
import { useTweetImageModal } from "pages/_app";
import Feed from "components/feed";

interface Props {
  user: any;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, user }) => {
  const { open } = useTweetImageModal();

  return (
    <>
      <Container>
        <Sidebar user={user} />
        <Main>{children}</Main>
        <Empty />
      </Container>
      {open && <ImageModal />}
    </>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;

  ${mq.fromMobileLg} {
    flex-direction: row;
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 64rem;
`;

const Empty = styled.div`
  flex: 1;
  border-left: 0.1rem solid var(--color-60);
`;

const ImageModal = () => {
  const {
    open: tweet,
    selectedImage: [selectedImage, setselectedImage],
    closeModal,
  } = useTweetImageModal();
  const [backgroundRGB, setBackgroundColor] = useState<number[] | null>(null);

  const nextImage = () => {
    if (tweet && selectedImage < tweet.images.length) {
      setselectedImage((s) => s + 1);
    }
  };

  const previusImage = () => {
    if (selectedImage !== 1) {
      setselectedImage((s) => s - 1);
    }
  };

  useKeyPressEvent("ArrowLeft", previusImage);
  useKeyPressEvent("ArrowRight", nextImage);
  useKeyPressEvent("Escape", () => {
    setBackgroundColor(null);
    closeModal();
  });

  if (tweet)
    return (
      <Portal>
        <ImageModalContainer>
          <ImageContainer backgroundRGB={backgroundRGB}>
            <Image
              src={tweet.images[selectedImage - 1].src}
              alt={tweet.description ?? ""}
            />
          </ImageContainer>
          <ColorExtractor
            key={selectedImage}
            rgb
            src={tweet.images[selectedImage - 1].src}
            getColors={([color]: [number[]]) => {
              setBackgroundColor(color);
            }}
          />
          <Content>
            {tweet.answers && <Feed tweetsProps={tweet.answers} />}
          </Content>
        </ImageModalContainer>
      </Portal>
    );

  return null;
};

const ImageModalContainer = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
`;

const Content = styled.section`
  width: 40rem;
  background: var(--color-100);
  height: 100%;
  overflow: auto;
`;

interface ImageContainerProps {
  backgroundRGB: number[] | null;
}
const ImageContainer = styled.section<ImageContainerProps>`
  transition: background-color 0.1s ease;
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundRGB }) => {
    if (!backgroundRGB) return "transparent";

    const [r, g, b] = backgroundRGB;
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  }};
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

export default Layout;
