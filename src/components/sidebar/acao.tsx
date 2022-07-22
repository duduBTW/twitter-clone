import styled from "@emotion/styled";
import { FC, Fragment, PropsWithChildren } from "react";

// components
import NextLink from "next/link";
import { mq } from "constants/theme";

interface Props {
  icon: string;
  href?: string;
}

const AcaoSidebar: FC<PropsWithChildren<Props>> = ({
  children,
  href,
  icon,
}) => {
  const Link = href ? NextLink : Fragment;

  return (
    <Link href={href ?? ""}>
      <Container>
        <Icon className={icon} />
        <Label>{children}</Label>
      </Container>
    </Link>
  );
};

const showLabelSize = mq.fromDesktopLg;
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  border-radius: 222rem;
  cursor: pointer;

  ${showLabelSize} {
    width: var(--sidebar-width);
    gap: 2rem;
  }

  &:hover,
  &:focus {
    background: var(--color-80);
  }
`;

const Icon = styled.i`
  font-size: 2.8rem;
`;

const Label = styled.div`
  display: none;
  font-size: 1.8rem;

  ${showLabelSize} {
    display: block;
  }
`;

export default AcaoSidebar;
