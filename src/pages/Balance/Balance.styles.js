import styled from "styled-components";

export const BalanceContainer = styled.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
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
  background: rgb(250, 250, 250);
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(251, 251, 251, 1) 33%,
    rgba(239, 243, 245, 1) 45%,
    rgba(242, 248, 250, 1) 58%,
    rgba(226, 229, 230, 1) 70%,
    rgba(209, 214, 215, 1) 82%,
    rgba(201, 206, 207, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BalanceAmount = styled.p`
  font-size: 3em;
  margin: 1em 0;
  font-weight: bolder;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(251, 251, 251, 1) 33%,
    rgba(239, 243, 245, 1) 45%,
    rgba(242, 248, 250, 1) 58%,
    rgba(226, 229, 230, 1) 70%,
    rgba(209, 214, 215, 1) 82%,
    rgba(201, 206, 207, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
