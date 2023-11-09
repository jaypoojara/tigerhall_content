import styled from "styled-components";
import { FontProps } from "./type";

export const XSFont = styled.div`
  font-size: 12px;
  letter-spacing: 0.18px;
`;

export const MDFont = styled.div`
  font-size: 16px;
  letter-spacing: 0.24px;
`;

export const XSHeaderBold = styled(XSFont)<FontProps>`
  color: ${({ theme, color }) => color || theme.palette.grey[900]};
  font-weight: 700;
`;

export const XSHeaderMedium = styled(XSFont)<FontProps>`
  color: ${({ theme, color }) => color || theme.palette.grey[700]};
  font-weight: 500;
`;

export const MDHeaderBold = styled(MDFont)<FontProps>`
  color: ${({ theme, color }) => color || theme.palette.black};
  font-weight: 700;
`;
