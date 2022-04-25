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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const BalanceTitle = styled.h2`
  font-size: 2em;
  margin: 0;
`;

export const BalanceAmount = styled.p`
  font-size: 3em;
  margin: 1em 0;
  font-weight: bolder;
`;
