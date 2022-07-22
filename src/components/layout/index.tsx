import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { useSession } from "next-auth/react";

// components
import Sidebar from "components/sidebar";
import { mq } from "constants/theme";

interface Props {
  user: any;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, user }) => {
  return (
    <Container>
      <Sidebar user={user} />
      <Main>{children}</Main>
      <A />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;

  ${mq.fromMobileLg} {
    flex-direction: row;
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 64rem;
`;

const A = styled.div`
  flex: 1;
  border-left: 0.1rem solid var(--color-60);
`;

export default Layout;
