import { UserProps } from "pages/home";
import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

// components
import * as HoverCard from "@radix-ui/react-hover-card";
import Avatar from "components/avatar/avatar";
import Button from "components/button";

interface Props {
  user: UserProps;
}

const UserHoverCard: FC<PropsWithChildren<Props>> = ({
  children,
  user: { id, name, profilePicture },
}) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>{children}</HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content>
          <Container>
            <Header>
              <Avatar width="6rem" height="6rem" src={profilePicture ?? ""} />
              <Button variant="oulined">Follow</Button>
            </Header>
            <Name>{name}</Name>
            <Id>@{id}</Id>
            <Bio>
              ご依頼募集中 <br />
              イラストレーターやってます。お仕事関係のメールはこちらにお送りください。
            </Bio>
          </Container>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export const Container = styled.div`
  width: 32rem;
  padding: 1.6rem;
  border-radius: 1rem;
  background: var(--color-100);
  border: 0.1rem solid var(--color-60);
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const Name = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const Id = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-50);
  margin-bottom: 1.2rem;
`;

export const Bio = styled.div`
  font-size: 1.4rem;
`;

export default UserHoverCard;
