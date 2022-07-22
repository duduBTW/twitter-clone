import { FC } from "react";
import styled from "@emotion/styled";

// components
import UserSidebar from "./user";
import AcaoSidebar from "./acao";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import DropdownContent from "components/dropdownMenu";
import { mq } from "constants/theme";
import { UserProps } from "pages/home";

interface Props {
  user: UserProps;
}

const SIDEBAR_ROUTES = [
  {
    label: "Home",
    icon: "ri-home-7-fill",
    href: "/home",
  },
  {
    label: "Search",
    icon: "ri-search-line",
    href: "/search",
  },
  {
    label: "Notifications",
    icon: "ri-notification-4-line",
    href: "/notifications",
  },
  {
    label: "Mail",
    icon: "ri-mail-line",
    href: "/mail",
  },
  {
    label: "Saved",
    icon: "ri-bookmark-line",
    href: "/bookmark",
  },
  {
    label: "Lists",
    icon: "ri-file-list-2-line",
    href: "/lists",
  },
] as const;

const Sidebar: FC<Props> = ({ user }) => {
  const links = SIDEBAR_ROUTES.map((route) => (
    <AcaoSidebar key={route.href} {...route}>
      {route.label}
    </AcaoSidebar>
  ));

  if (!user)
    return (
      <Container>
        <AcaoSidebar href="/" icon="ri-twitter-fill" />
        <AcaoSidebar icon="ri-hashtag">Explore</AcaoSidebar>
        <AcaoSidebar icon="ri-settings-4-line">Settings</AcaoSidebar>
      </Container>
    );

  return (
    <Container>
      <AcaoSidebar href="/" icon="ri-twitter-fill" />
      {links}
      <AcaoSidebar href={`/${user.id}`} icon="ri-user-line">
        Profile
      </AcaoSidebar>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger>
          <AcaoSidebar icon="ri-more-line">Mais</AcaoSidebar>
        </DropdownMenuPrimitive.Trigger>
        <DropdownContent
          menuItems={[
            { label: "Topics", icon: "ri-file-list-3-line" },
            { label: "Moments" },
            {
              label: "Informative report",
            },
            {
              label: "Twitter for professionals",
            },
            {
              label: "Twitter ads",
            },
            {
              label: "Statistics",
            },
          ]}
        />
      </DropdownMenuPrimitive.Root>
      <Spacer />
      <UserSidebar user={user} />
    </Container>
  );
};

const Container = styled.header`
  flex: 1;
  height: 100vh;
  position: sticky;
  top: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;
  padding: 1rem 1rem 2rem;
  border-right: 0.1rem solid var(--color-60);
  display: none;

  ${mq.fromMobileLg} {
    display: flex;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

export default Sidebar;
