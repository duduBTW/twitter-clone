import { FC } from "react";
import styled from "@emotion/styled";
import { TweetProps } from "pages/home";
import Tweet from "components/tweet";
import Link from "next/link";

interface Props {
  tweetsProps: TweetProps[];
}

const Feed: FC<Props> = ({ tweetsProps }) => {
  const tweets = tweetsProps.map((tweetProps) => (
    <Link
      key={tweetProps.id}
      href={`/${tweetProps.UserTwitter.id}/status/${tweetProps.id}`}
      passHref
    >
      <a>
        <Tweet tweet={tweetProps} />
      </a>
    </Link>
  ));

  return <Container>{tweets}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Feed;
