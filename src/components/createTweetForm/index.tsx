import { FC } from "react";
import styled from "@emotion/styled";

// components
import Avatar from "components/avatar/avatar";
import Button from "components/button";
import { useSessionData } from "pages/_app";

const CreateTweetForm: FC<{
  className?: string;
  placeholder?: string;
}> = ({ className, placeholder = "What's happening?" }) => {
  const user = useSessionData();
  if (!user) return null;

  return (
    <Container className={className}>
      <Avatar
        src={user.profilePicture ?? "https://placewaifu.com/image/400/400"}
      />
      <Input placeholder={placeholder} type="text" name="" id="" />
      <Action>
        <Button>Tweet</Button>
      </Action>
    </Container>
  );
};

const Container = styled.form`
  padding: 0.4rem 2rem 2rem;
  display: grid;
  grid-template-areas:
    "avatar input"
    "action action";
  grid-template-columns: auto 1fr;
  gap: 2rem;
  border-bottom: 0.1rem solid var(--color-60);
`;

const Action = styled.div`
  grid-area: action;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  background: var(--color-100);
  color: var(--color-00);
  font-size: 2rem;
  outline: none;
  border: none;
  font-family: "Nunito", sans-serif;
`;

export default CreateTweetForm;
