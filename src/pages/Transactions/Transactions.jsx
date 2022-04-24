import { useSelector } from "react-redux";
import { AvatarImg } from "../../styled-components/General.styles";
import {
  HistoryAmoutIn,
  HistoryAmoutOut,
  HistoryContainer,
  HistoryContent,
  HistoryDate,
  HistoryUser,
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
          <AvatarImg
            src={`https://ui-avatars.com/api/?name=Fernando+Valdez&background=random`}
          />
          {item.receiver !== state.logged.email ? (
            <div>
              <HistoryContent>
                <HistoryUser>Sended: </HistoryUser>
                <HistoryUser>{item.receiver}</HistoryUser>
                <HistoryDate>{item.date}</HistoryDate>
              </HistoryContent>
              <HistoryAmoutOut>- {item.amount} €</HistoryAmoutOut>
            </div>
          ) : (
            <div>
              <HistoryContent>
                <HistoryUser>Received: </HistoryUser>
                <HistoryUser>{item.author}</HistoryUser>
                <HistoryDate>{item.date}</HistoryDate>
              </HistoryContent>
              <HistoryAmoutIn>+ {item.amount} €</HistoryAmoutIn>
            </div>
          )}
        </HistoryContainer>
      ))}
    </TransactionsContainer>
  );
};

export default Transactions;
