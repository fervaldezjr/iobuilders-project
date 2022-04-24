import { useSelector } from "react-redux";
import Transactions from "../Transactions/Transactions";
import {
  BalanceAmount,
  BalanceContainer,
  BalanceTitle,
} from "./Balance.styles";

const Balance = () => {
  const state = useSelector((state) => state);

  const wallet = state.user.map(
    (user) => user.email === state.logged.email && user.wallet
  );

  console.log(wallet)

  return (
    <>
      <BalanceContainer>
        <BalanceTitle>Balance Available</BalanceTitle>
        <BalanceAmount>€ {wallet}</BalanceAmount>
      </BalanceContainer>
      <Transactions />
    </>
  );
};

export default Balance;
