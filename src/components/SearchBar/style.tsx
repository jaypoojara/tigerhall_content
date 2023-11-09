import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  img:first-child {
    position: absolute;
    z-index: 1;
    left: 8px;
    top: 8px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.grey[700]};
  background: ${({ theme }) => theme.palette.grey[900]};
  color: ${({ theme }) => theme.palette.white};
  outline: none;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
  padding-left: 30px;
  width: 200px;
`;
