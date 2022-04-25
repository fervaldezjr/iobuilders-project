import styled from "styled-components";

export const TransactionsContainer = styled.div`
  padding: 2em 0;
  margin: 3em;
  margin-top: 0;
`;

export const TransactionsTitle = styled.h2`
  color: #282c34;
`;

export const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
  padding: 1.5em 0;
  border: gray solid 1px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  border-radius: 15px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const HistoryContent = styled.div`
  font-weight: 600;
  font-size: 1em;
  color: white;
`;

export const HistoryInfo = styled.div`
  display: flex;
  flex-direction: column;
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

export const HistoryUserTitle = styled.h3`
  margin: 0;
  padding: 0.3em 0;
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
export const HistoryUser = styled.p`
  margin: 0;
  padding: 0.3em 0;
  font-weight: 400;
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

export const HistoryAmoutOut = styled.p`
  font-weight: 600;
  font-size: 2.2em;
  background-image: linear-gradient(25deg, #d64c7f, #ee4758 50%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const HistoryAmoutIn = styled.p`
  font-weight: 600;
  font-size: 2.2em;
  background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  animation: intro-gradient 10s infinite ease both;
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-animation: intro-gradient 10s infinite ease both;
  -moz-animation: intro-gradient 10s infinite ease both;
  animation: intro-gradient 10s infinite ease both;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
