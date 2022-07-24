import { FC } from "react";
import { ImageProps } from "pages/home";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  images: ImageProps[];
  fullHeight?: boolean;
}

const TweetImages: FC<Props> = ({ images, fullHeight }) => {
  const size = images.length;

  return (
    <Container size={size}>
      {images.map(({ src, id }, index) => {
        return (
          <Image
            size={size}
            position={index + 1}
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

interface ContainerProps {
  size: number;
}
const Container = styled.div<ContainerProps>`
  display: grid;

  ${({ size }) => {
    console.log("size", size);

    if (size === 1) {
      return css`
        grid-template-columns: 1fr;
      `;
    }

    return css`
      grid-template-columns: 1fr 1fr;
      border-radius: 1.8rem;
      overflow: hidden;
    `;
  }}
`;

interface ImageTweetProps {
  size: number;
  position: number;
  fullHeight?: boolean;
}
const Image = styled.img<ImageTweetProps>`
  border: 0.1rem solid var(--color-100);
  max-height: ${({ fullHeight }) => (fullHeight ? "100%" : "60rem")};
  max-width: 100%;

  ${({ size, fullHeight, position }) => {
    if (size === 1) {
      return css`
        border-radius: 1.8rem;
      `;
    }

    return css`
      height: 100%;
      width: 100%;
      object-fit: cover;
      grid-row: span ${size === 3 && position === 1 ? "2" : "1"};
      max-height: ${getMaxSizeImage(size, position, fullHeight)};
    `;
  }}

  &:hover {
    opacity: 0.92;
    background-color: lightblue;
  }
`;

const getMaxSizeImage = (
  size: number,
  position: number,
  fullHeight?: boolean | null
) => {
  if (fullHeight || (size === 3 && position === 1)) {
    return "100%";
  }

  if (size === 2) {
    return "40rem";
  }

  return "20rem";
};

export default TweetImages;
