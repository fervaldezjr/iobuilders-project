import styled from "styled-components";

export const BalanceContainer = styled.div`
  background-color: #282c34;
  color: white;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 2em 0;
  margin: 3em;
  margin-bottom: 0;
`;

export const BalanceTitle = styled.h2`
  font-size: 2em;
  margin: 0;
`;

export const BalanceAmount = styled.p`
  font-size: 3.2em;
  margin: 1em 0;
  font-weight: bolder;
`;
