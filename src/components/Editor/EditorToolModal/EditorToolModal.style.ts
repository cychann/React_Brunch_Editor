import styled from "styled-components";
import { COMMON_THEME } from "styles/Theme";

export const EditorToolModalContainer = styled.div<{
  $top: number;
}>`
  position: fixed;
  top: ${({ $top }) => `${$top}px`};
  right: 20%;

  display: inline-block;
  border: 1px solid ${COMMON_THEME.modal_border_color};
  border-radius: 1px;
`;