import styled from "styled-components";
import { XSHeaderBold } from "../TextComp/style";

export const Container = styled.div`
  display: flex;
  height: 16px;
  padding: 4px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.7);
  ${XSHeaderBold} {
    color: ${({ theme }) => theme.palette.white};
  }
`;
