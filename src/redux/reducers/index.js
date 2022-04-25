const initialState = {
  logged: {},
  user: [
    {
      id: 1,
      firstName: "User",
      lastName: "A",
      email: "a-user@mail.com",
      password: "1234",
      wallet: 0,
    },
    {
      id: 2,
      firstName: "User",
      lastName: "B",
      email: "b-user@mail.com",
      password: "1234",
      wallet: 0,
    },
  ],
  transactions: [
    // {
    //   id: 1,
    //   date: "2022/04/23",
    //   author: "david@gmail.com",
    //   receiver: "fernando@gmail.com",
    //   amount: 50,
    // },
    // {
    //   id: 2,
    //   date: "2022/04/23",
    //   author: "fernando@gmail.com",
    //   receiver: "david@gmail.com",
    //   amount: 100,
    // },
    // {
    //   id: 3,
    //   date: "2022/04/23",
    //   author: "daniela@gmail.com",
    //   receiver: "david@gmail.com",
    //   amount: 100,
    // },
  ],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, logged: action.payload };
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "SEND_MONEY":
      return {
        ...state,
        user: state.user.map((user) =>
          user.email === state.logged.email // si esta logueado
            ? { ...user, wallet: user.wallet - action.payload.amount } // entro a su wallet y descuento el importe ingresado
            : user.email === action.payload.receiver
            ? { ...user, wallet: user.wallet + action.payload.amount }
            : user
        ),
        transactions: [...state.transactions, action.payload],
      };
    case "ADD_MONEY":
      return {
        ...state,
        user: state.user.map((user) =>
          user.email === state.logged.email
            ? { ...user, wallet: user.wallet + action.payload.amount }
            : user
        ),
        transactions: [...state.transactions, action.payload],
      };
    default:
      return { ...state };
  }
};

export default walletReducer;
