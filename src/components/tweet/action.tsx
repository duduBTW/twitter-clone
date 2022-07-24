import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

interface Props {
  icon: string;
  active?: boolean;
  color?: string;
  colorHover?: string;
  onClick?(): void;
}

const TweetAction: FC<PropsWithChildren<Props>> = ({
  children,
  icon,
  color,
  onClick,
  colorHover,
  active = false,
}) => {
  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      colorHover={colorHover}
      color={color}
      active={active}
    >
      <Icon className={icon} />
      <div>{children}</div>
    </Container>
  );
};

const Icon = styled.i`
  box-sizing: border-box;
  line-height: 1.8rem;
  border-radius: 222rem;
  padding: 0.68rem 0.6rem 0.6rem;
  margin: -0.6rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin-right: 0.4rem;
`;

const Container = styled.button<{
  colorHover?: string;
  color?: string;
  active?: boolean;
}>`
  display: flex;
  align-items: center;
  color: ${({ color, active }) =>
    color && active ? color : "var(--color-50)"};

  &:hover,
  &:focus {
    color: ${({ color }) => (color ? color : "var(--color-40)")};

    ${Icon} {
      background: ${({ colorHover }) => colorHover ?? "var(--color-80)"};
    }
  }
`;

export default TweetAction;
