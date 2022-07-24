import { FC } from "react";
import { ImageProps } from "pages/home";
import styled from "@emotion/styled";

interface Props {
  images: ImageProps[];
  fullHeight?: boolean;
}

const TweetImages: FC<Props> = ({ images, fullHeight }) => {
  return (
    <Container>
      {images.map(({ src, id }) => {
        return (
          <Image
            key={id}
            fullHeight={fullHeight}
            alt={`tweet image`}
            src={src}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 1.8rem;
  overflow: hidden;
`;

const Image = styled.img<{
  fullHeight?: boolean;
}>`
  max-height: ${({ fullHeight }) => (fullHeight ? "100%" : "60rem")};
  max-width: 100%;
`;

export default TweetImages;
