import { FC } from "react";
import styled from "@emotion/styled";
import { TweetProps } from "pages/home";
import TweetCard from "components/tweet/card";
import Link from "next/link";

interface Props {
  tweetsProps: TweetProps[];
}

const Feed: FC<Props> = ({ tweetsProps }) => {
  const tweets = tweetsProps.map((tweetProps) => (
    <Link
      key={tweetProps.id}
      href={`/${tweetProps.userTwitter.id}/status/${tweetProps.id}`}
      passHref
    >
      <a>
        <TweetCard tweet={tweetProps} />
      </a>
    </Link>
  ));

  return <Container>{tweets}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80rem;
`;

export default Feed;
