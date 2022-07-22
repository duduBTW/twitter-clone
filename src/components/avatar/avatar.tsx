import { FC, ReactEventHandler } from "react";
import styled from "@emotion/styled";

// components
import * as RUAvatar from "@radix-ui/react-avatar";

interface Props {
  src: string;
  className?: string;
  width?: string;
  height?: string;
  gridArea?: string;
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

const Avatar: FC<Props> = ({
  src,
  gridArea,
  className,
  width = "5.2rem",
  height = "5.2rem",
  onClick,
}) => {
  return (
    <Container
      onClick={onClick}
      className={className}
      style={{
        width,
        height,
        gridArea,
      }}
    >
      <Image alt="" src={src} />
    </Container>
  );
};

const Container = styled(RUAvatar.Root)`
  display: inline-flex;
  border-radius: 100%;
`;

const Image = styled(RUAvatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export default Avatar;
