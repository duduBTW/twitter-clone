import { ReactNode, FC } from "react";
import styled from "@emotion/styled";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface Props {
  menuItems: {
    label: string;
    icon?: string;
  }[];
}

const DropdownContent: FC<Props> = ({ menuItems }) => {
  return (
    <Container>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.label}>
          {menuItem.icon && (
            <DropdownMenuPrimitive.ItemIndicator
              style={{
                position: "absolute",
                left: 0,
                width: 25,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className={menuItem.icon} />
            </DropdownMenuPrimitive.ItemIndicator>
          )}
          {menuItem.label}
        </MenuItem>
      ))}
    </Container>
  );
};

const Container = styled(DropdownMenuPrimitive.Content)`
  max-width: 24rem;
  max-height: 32rem;
  overflow: auto;
  background-color: var(--color-100);
  border-radius: 0.4rem;
  border: 0.1rem solid var(--color-60);
`;

const MenuItem = styled(DropdownMenuPrimitive.Item)`
  cursor: pointer;
  padding: 1.4rem 2.4rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`;

const Divider = styled(DropdownMenuPrimitive.Separator)`
  background-color: var(--color-60);
  height: 0.1rem;
  margin: 0.8rem;
`;

export default DropdownContent;
