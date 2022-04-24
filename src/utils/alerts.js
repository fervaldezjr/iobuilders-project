import Swal from "sweetalert2";

export const noFoundsAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Insufficient Funds...",
    text: "Check your wallet and try again.",
  });
};

export const userNoRegistedAlert = () => {
  Swal.fire({
    icon: "info",
    title: "User not found...",
    text: "The user you want to transfer to is not registered.",
  });
};

export const depositSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Deposit Success...",
    text: "You have already the deposit in your account!",
  });
};

export const transferSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Transfer Success...",
    text: "Transfer done successfully!",
  });
};

export const moreThanZeroAlert = () => {
  Swal.fire({
    icon: "info",
    title: "Enter an amount greater than 0...",
    text: "Oops, you must enter some value greater than 0.",
  });
};

export const badYouAlert = () => {
  Swal.fire({
    icon: "info",
    title: "You can't transfer yourself...",
    text: "You are trying to transfer yourself, try making a Deposit.",
  });
};
