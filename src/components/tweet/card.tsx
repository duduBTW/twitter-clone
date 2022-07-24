import { FC, useState } from "react";
import styled from "@emotion/styled";
import { TweetProps } from "pages/home";
import dynamic from "next/dynamic";
import { css } from "@emotion/react";

// components
const UserHoverCard = dynamic(() => import("components/user/hoverCard"), {
  ssr: false,
});
import Avatar from "components/avatar/avatar";
import TimeAgo from "components/timeAgo";
import TweetAction from "./action";
import TweetImages from "./images";
import Link from "next/link";

const TweetCard: FC<{
  tweet: TweetProps;
  insideTimeline?: boolean;
}> = ({ tweet, insideTimeline = false }) => {
  return (
    <Container insideTimeline={insideTimeline} key={tweet.id}>
      <TimeLine>
        <UserHoverCard user={tweet.userTwitter}>
          <Link href={`/${tweet.userTwitter.id}`} passHref>
            <Avatar
              onClick={(e) => e.stopPropagation()}
              src={tweet.userTwitter.profilePicture ?? ""}
            />
          </Link>
        </UserHoverCard>

        {insideTimeline && <TimeLineIndicator />}
      </TimeLine>

      <Content insideTimeline={insideTimeline} tweet={tweet} />
    </Container>
  );
};

interface ContainerProps {
  insideTimeline?: boolean;
}
const Container = styled.div<ContainerProps>`
  cursor: pointer;
  padding: 2rem;
  display: flex;
  gap: 1.2rem;

  ${({ insideTimeline }) => {
    if (insideTimeline) {
      return css`
        padding-bottom: 0;
        margin-bottom: -2rem;
      `;
    }

    return css`
      border-bottom: 0.1rem solid var(--color-60);
    `;
  }};

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
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

const Content: FC<{ tweet: TweetProps; insideTimeline?: boolean }> = ({
  tweet,
  insideTimeline,
}) => {
  const [retweeted, setRetweeted] = useState(tweet.retweeted);
  const [liked, setLiked] = useState(tweet.liked);

  return (
    <ContentContainer insideTimeline={insideTimeline}>
      <Creator>
        <Name>{tweet.userTwitter.name}</Name> <Id>@{tweet.userTwitter.id}</Id>{" "}
        <Time>
          · <TimeAgo date={new Date(tweet.createdAt).toISOString()} />
        </Time>
      </Creator>
      <MoreMenu className="ri-more-line" />
      <div
        style={{
          gridArea: "content",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <Text>{tweet.description}</Text>
        {tweet.images.length > 0 && <TweetImages images={tweet.images} />}
      </div>
      <Actions
        retweeted={retweeted}
        liked={liked}
        toggleLike={() => setLiked((l) => !l)}
        toggleRetweet={() => setRetweeted((r) => !r)}
      />
    </ContentContainer>
  );
};

interface ContentProps {
  insideTimeline?: boolean;
}
const ContentContainer = styled.div<ContentProps>`
  flex: 1;
  display: grid;
  grid-template-areas:
    "creator actions"
    "content content"
    "status  status";
  grid-template-columns: 1fr auto;
  gap: 1.4rem;
  padding-bottom: ${({ insideTimeline }) => (insideTimeline ? "4rem" : "0")};
`;

const Creator = styled.div`
  font-family: "Nunito", sans-serif;

  grid-area: creator;
  margin-top: 0.4rem;
`;

const MoreMenu = styled.i`
  grid-area: actions;
  font-size: 2rem;
  color: var(--color-40);
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

const Text = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 1.8rem;
  margin-top: -1.2rem;
`;

const Actions: FC<{
  retweeted: boolean | null;
  liked: boolean | null;
  toggleRetweet(): void;
  toggleLike(): void;
}> = ({ liked, retweeted, toggleLike, toggleRetweet }) => {
  return (
    <ActionsContainer>
      <TweetAction icon="ri-chat-1-line">32</TweetAction>
      <TweetAction
        onClick={toggleRetweet}
        active={Boolean(retweeted)}
        color={"rgb(0, 186, 124)"}
        colorHover={"rgba(0, 186, 124, 0.2)"}
        icon="ri-repeat-2-line"
      >
        24
      </TweetAction>
      <TweetAction
        onClick={toggleLike}
        active={Boolean(liked)}
        color={"rgb(249, 24, 128)"}
        colorHover={"rgba(249, 24, 128, 0.2)"}
        icon="ri-heart-3-line"
      >
        126
      </TweetAction>
      <TweetAction icon="ri-share-line" />
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

export default TweetCard;
