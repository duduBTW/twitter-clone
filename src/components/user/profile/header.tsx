import { UserProps } from "pages/home";
import { FC } from "react";

// components
import styled from "@emotion/styled";
import Avatar from "components/avatar/avatar";
import Button from "components/button";

interface Props {
  user: UserProps;
}

const UserHeader: FC<Props> = ({
  user: { id, name, profileCover, profilePicture },
}) => {
  return (
    <Container>
      <Banner
        src={profileCover ?? "https://placewaifu.com/image/1000/1000"}
        alt="Banner"
      />
      <Header>
        <ProfilePicture
          src={profilePicture ?? ""}
          width="14rem"
          height="14rem"
        />
        <FollowButton variant="oulined">Follow</FollowButton>
      </Header>
      <Name>{name}</Name>
      <Id>@{id}</Id>
      <div>
        ご依頼募集中 <br />
        イラストレーターやってます。お仕事関係のメールはこちらにお送りください。
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Banner = styled.img`
  width: calc(100% + 4rem);
  height: 22rem;
  margin: 0 -2rem;
  object-fit: cover;
`;

const ProfilePicture = styled(Avatar)`
  margin-top: -7rem;
  outline: 0.4rem solid var(--color-100);
`;

const Name = styled.div`
  font-size: 2.6rem;
  font-weight: 700;
`;

const Id = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1.6rem;
  color: var(--color-50);
`;

const FollowButton = styled(Button)`
  margin-top: 2rem;
`;

export default UserHeader;
