import { TweetProps } from "pages/home";
import { FC } from "react";
import styled from "@emotion/styled";

// components
import * as Tabs from "@radix-ui/react-tabs";
import Feed from "components/feed";

interface Props {
  tweets: TweetProps[];
}

const UserProfileTabs: FC<Props> = ({ tweets }) => {
  return (
    <Tabs.Root defaultValue="tab1" orientation="vertical">
      <List aria-label="tabs example">
        <Trigger value="tab1">Tweets</Trigger>
        <Trigger value="tab2">Tweets ans answers</Trigger>
        <Trigger value="tab3">Media</Trigger>
        <Trigger value="tab4">Likes</Trigger>
      </List>
      <Tabs.Content value="tab1">
        <Feed tweetsProps={tweets} />
      </Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
      <Tabs.Content value="tab4">Tab 4 content</Tabs.Content>
    </Tabs.Root>
  );
};

const List = styled(Tabs.List)`
  width: 100%;
  display: flex;
  border-bottom: 0.1rem solid var(--color-60);
`;

const Trigger = styled(Tabs.Trigger)`
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  flex: 1;
  flex-basis: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem 2rem;
  color: var(--color-50);
  position: relative;

  &[data-state="active"] {
    color: var(--color-20);
    font-weight: 700;

    &::after {
      content: "";
      position: absolute;
      height: 0.4rem;
      border-radius: 2rem;
      bottom: 0;
      width: 6rem;
      background: var(--color-primary);
    }
  }

  &:hover {
    background: var(--color-80);
  }
`;

export default UserProfileTabs;
