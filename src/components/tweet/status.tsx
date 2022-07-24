import { FC } from "react";
import styled from "@emotion/styled";
import { TweetProps } from "pages/home";

// components
import Avatar from "components/avatar/avatar";
import TweetImages from "./images";
import CreateTweetForm from "components/createTweetForm";

const TweetStatus: FC<TweetProps> = ({ userTwitter, images, description }) => {
  return (
    <Container>
      <User {...userTwitter} />
      <Text>{description}</Text>
      {images.length > 0 && <TweetImages fullHeight images={images} />}

      <AnswerTweetForm placeholder="Tweet your answer" />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
`;

const AnswerTweetForm = styled(CreateTweetForm)`
  margin-top: 1.2rem;
  padding-top: 2rem;
  border-top: 0.1rem solid var(--color-60);
`;

const Text = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 2.4rem;
`;

const User: FC<TweetProps["userTwitter"]> = ({ id, name, profilePicture }) => {
  return (
    <UserContainer>
      <Avatar gridArea="pfp" src={profilePicture ?? ""} />
      <div>
        <UserName>{name}</UserName>
        <UserId>@{id}</UserId>
      </div>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: flex-start;
  gap: 1.4rem;
`;
const UserName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;
const UserId = styled.div`
  font-size: 1.5rem;
  color: var(--color-50);
`;

export default TweetStatus;
