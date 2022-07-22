import { FC, useState } from "react";
import styled from "@emotion/styled";
import { TweetProps } from "pages/home";

// components
import UserHoverCard from "components/user/hoverCard";
import Avatar from "components/avatar/avatar";
import TimeAgo from "components/timeAgo";
import TweetAction from "./action";
import TweetContent from "./content";
import Link from "next/link";

interface Props {
  tweet: TweetProps;
  fullHeight?: boolean;
}

const Tweet: FC<Props> = ({ tweet, fullHeight = false }) => {
  const [retweeted, setRetweeted] = useState(tweet.retweeted);
  const [liked, setLiked] = useState(tweet.liked);

  return (
    <Container key={tweet.id}>
      <TimeLine>
        {/* <UserHoverCard user={tweet.user}>
        </UserHoverCard> */}
        <Link href={`/${tweet.UserTwitter.id}`} passHref>
          <Avatar
            onClick={(e) => e.stopPropagation()}
            src={tweet.UserTwitter.profilePicture ?? ""}
          />
        </Link>

        <TimeLineIndicator />
      </TimeLine>

      <Content>
        <Creator>
          <Name>{tweet.UserTwitter.name}</Name> <Id>@{tweet.UserTwitter.id}</Id>{" "}
          <Time>
            · <TimeAgo date={new Date(tweet.createdAt).toISOString()} />
          </Time>
        </Creator>
        <MoreMenu className="ri-more-line" />
        <TweetContent fullHeight={fullHeight} contentList={tweet.content} />
        <Actions>
          <TweetAction icon="ri-chat-1-line">32</TweetAction>
          <TweetAction
            onClick={() => setRetweeted(!retweeted)}
            active={Boolean(retweeted)}
            color={"rgb(0, 186, 124)"}
            colorHover={"rgba(0, 186, 124, 0.2)"}
            icon="ri-repeat-2-line"
          >
            24
          </TweetAction>
          <TweetAction
            onClick={() => setLiked(!liked)}
            active={Boolean(liked)}
            color={"rgb(249, 24, 128)"}
            colorHover={"rgba(249, 24, 128, 0.2)"}
            icon="ri-heart-3-line"
          >
            126
          </TweetAction>
          <TweetAction icon="ri-share-line" />
        </Actions>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  padding: 2rem;
  display: flex;
  gap: 1.2rem;
  border-bottom: 0.1rem solid var(--color-60);

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`;

const Content = styled.div`
  flex: 1;
  display: grid;
  grid-template-areas:
    "creator actions"
    "content content"
    "status  status";
  grid-template-columns: 1fr auto;
  gap: 1.4rem;
`;

const Creator = styled.div`
  font-family: "Nunito", sans-serif;

  grid-area: creator;
  margin-top: 0.4rem;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Id = styled.span`
  opacity: 0.62;
  margin-left: 0.4rem;
`;

const Time = styled.span`
  opacity: 0.62;
  margin-left: 0.4rem;
`;

const TimeLineIndicator = styled.div`
  flex: 1;
  background: var(--color-60);
  width: 0.24rem;
  margin: 0 auto;
`;

const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreMenu = styled.i`
  grid-area: actions;
  font-size: 2rem;
  color: var(--color-40);
`;

const Actions = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

export default Tweet;
