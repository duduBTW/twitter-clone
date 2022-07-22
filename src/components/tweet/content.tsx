import { FC } from "react";
import { TweetContent as TweetContentProps } from "pages/home";
import styled from "@emotion/styled";

interface Props {
  contentList: TweetContentProps[];
  fullHeight?: boolean;
}

const TweetContent: FC<Props> = ({ contentList, fullHeight }) => {
  return (
    <>
      {contentList.map((content) => {
        switch (content.type) {
          case "image":
            return (
              <Image
                fullHeight={fullHeight}
                key={content.src}
                alt={`tweet image`}
                src={content.src ?? ""}
              />
            );

          case "text":
            return <Text>{content.src}</Text>;

          default:
            break;
        }
      })}
    </>
  );
};

interface ImageProps {
  fullHeight?: boolean;
}

const Image = styled.img<ImageProps>`
  grid-area: content;
  max-height: ${({ fullHeight }) => (fullHeight ? "100%" : "56rem")};
  max-width: 100%;
  border-radius: 1.8rem;
`;

const Text = styled.div`
  grid-area: content;
`;

export default TweetContent;
