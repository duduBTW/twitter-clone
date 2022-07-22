import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

interface Props {
  variant?: "oulined" | "contaned";
  className?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  variant = "contaned",
}) => {
  return (
    <Container variant={variant} className={className}>
      {children}
    </Container>
  );
};

interface ContainerProps {
  variant?: "oulined" | "contaned";
}

const Container = styled.button<ContainerProps>`
  cursor: pointer;
  border-radius: 2222rem;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: var(--color-00);

  background: ${({ variant }) =>
    variant === "contaned" ? "var(--color-primary)" : "var(--color-100)"};
  border: ${({ variant }) =>
    variant === "contaned" ? "none" : "0.2rem solid var(--color-60)"};

  &:hover {
    opacity: 0.82;
  }
`;

export default Button;
