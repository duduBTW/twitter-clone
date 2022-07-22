import { FC } from "react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";
import { UserProps } from "pages/home";

// components
import Avatar from "components/avatar/avatar";

interface Props {
  user: UserProps;
}

const UserSidebar: FC<Props> = ({ user }) => {
  return (
    <Container>
      <Avatar
        height="4rem"
        width="4rem"
        gridArea="avatar"
        src={user.profilePicture ?? ""}
      />
      <Name>{user.name}</Name>
      <Id>@{user.id}</Id>
      <ActionToggle className="ri-more-line" />
    </Container>
  );
};

const showLabelSize = mq.fromDesktopLg;
const Container = styled.div`
  cursor: pointer;
  display: grid;
  box-sizing: border-box;
  grid-template-areas: "avatar";
  padding: 0.4rem 1.2rem;
  border-radius: 222rem;

  ${showLabelSize} {
    grid-template-areas:
      "avatar name actions"
      "avatar id   actions";
    align-items: center;
    grid-template-columns: 4rem auto 2rem;
    width: var(--sidebar-width);
  }

  &:hover {
    background: var(--color-80);
  }
`;

const Name = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  padding-left: 2rem;
  display: none;
  grid-area: name;
  height: 2.8rem;
  overflow: hidden;

  ${showLabelSize} {
    display: block;
  }
`;

const Id = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  padding-left: 2rem;
  display: none;
  grid-area: id;
  opacity: 0.42;

  ${showLabelSize} {
    display: block;
  }
`;

const ActionToggle = styled.i`
  grid-area: actions;
  font-size: 1.8rem;
  opacity: 0.62;
  display: none;

  ${showLabelSize} {
    display: block;
  }
`;

export default UserSidebar;
