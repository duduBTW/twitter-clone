import { css } from "@emotion/react";
import { colors } from "./theme";

const globalStyles = css`
  :root {
    --color-primary: ${colors.primary};
    --color-100: ${colors.gray100};
    --color-80: ${colors.gray80};
    --color-60: ${colors.gray60};
    --color-50: ${colors.gray50};
    --color-40: ${colors.gray40};
    --color-20: ${colors.gray20};
    --color-00: ${colors.gray00};

    --sidebar-width: 24rem;
  }
`;

export default globalStyles;
