import { useSelector } from "react-redux";
import {
  HistoryAmoutIn,
  HistoryAmoutOut,
  HistoryContainer,
  HistoryContent,
  HistoryInfo,
  HistoryUser,
  HistoryUserTitle,
  TransactionsContainer,
  TransactionsTitle,
} from "./Transactions.styles";

const Transactions = () => {
  const state = useSelector((state) => state);

  const transactions = state.transactions.filter(
    (item) =>
      item.author.includes(state.logged.email) ||
      item.receiver.includes(state.logged.email)
  );

  return (
    <TransactionsContainer>
      <TransactionsTitle>Recent Movements</TransactionsTitle>
      {transactions.map((item) => (
        <HistoryContainer key={item.id}>
         
          {item.receiver !== state.logged.email ? (
              <>
                <HistoryContent>
                  <HistoryInfo>
                    <HistoryUserTitle>Sent to: </HistoryUserTitle>
                    <HistoryUser>{item.receiver}</HistoryUser>
                  </HistoryInfo>
                  <HistoryInfo>
                    <HistoryUserTitle>Date: </HistoryUserTitle>
                    <HistoryUser>{item.date}</HistoryUser>
                  </HistoryInfo>
                </HistoryContent>
              <HistoryAmoutOut>- {item.amount} €</HistoryAmoutOut>
              </>
          ) : (
              <>
                <HistoryContent>
                  <HistoryInfo>
                    <HistoryUserTitle>Received: </HistoryUserTitle>
                    <HistoryUser>{item.author}</HistoryUser>
                  </HistoryInfo>
                  <HistoryInfo>
                    <HistoryUserTitle>Date: </HistoryUserTitle>
                    <HistoryUser>{item.date}</HistoryUser>
                  </HistoryInfo>
                </HistoryContent>
              <HistoryAmoutIn>+ {item.amount} €</HistoryAmoutIn>
              </>
          )}
        </HistoryContainer>
      ))}
    </TransactionsContainer>
  );
};

export default Transactions;
