import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.teal[1000]};
  margin: auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  color: ${({ theme }) => theme.palette.white};
  > * {
    max-width: 475px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
