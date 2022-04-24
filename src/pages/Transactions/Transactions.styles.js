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
  padding: 0.5em 0;
  border: gray solid 1px;
  background-color: #282c34;
  border-radius: 15px;
  color: black;
`;

export const HistoryContent = styled.div`
  font-weight: 600;
  font-size: 1em;
  color: white;
`;
export const HistoryUser = styled.div``;
export const HistoryDate = styled.div``;
export const HistoryAmoutOut = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  color: tomato;
`;
export const HistoryAmoutIn = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  color: green;
`;
