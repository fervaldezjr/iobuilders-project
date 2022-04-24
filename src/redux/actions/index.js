const setTransaction = (payload) => ({
  type: "SET_TRANSACTION",
  payload,
});

const setLogin = (payload) => ({
  type: "SET_LOGIN",
  payload,
});

const addUser = (payload) => ({
  type: "ADD_USER",
  payload,
});

const sendMoney = (payload) => ({
  type: "SEND_MONEY",
  payload,
});

export { setTransaction, setLogin, addUser, sendMoney };
