import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(0.8rem);
  font-weight: 600;

  font-size: 2.2rem;
  padding: 2rem;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export default Title;
