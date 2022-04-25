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
  background-color: #282c34;
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
`;

export const HistoryUserTitle = styled.h3`
  margin: 0;
  padding: 0.3em 0;
`;
export const HistoryUser = styled.p`
  margin: 0;
  padding: 0.3em 0;
  font-weight: 400;
`;

export const HistoryAmoutOut = styled.p`
  font-weight: 600;
  font-size: 3em;
  color: #b95071;
`;
export const HistoryAmoutIn = styled.p`
  font-weight: 600;
  font-size: 2.2em;
  color: #4fcfc0;
`;
