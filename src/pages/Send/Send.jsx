import { useDispatch, useSelector } from "react-redux";
import { sendMoney } from "../../redux/actions";
import {
  Button,
  ErrorMessages,
  FormContainer,
  FormStyle,
  FormTitle,
  Input,
  Label,
} from "../../styled-components/General.styles";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { badYouAlert, noFounds, noFoundsAlert, transferSuccessAlert, userNoRegisted, userNoRegistedAlert } from "../../utils/alerts";

const Send = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const counterTransactions = useSelector(state => state.transactions.length)
  const userLogged = useSelector(state => state.logged.email)
  const user = useSelector(state => state.user)
  const userLoggedWallet = user.find((user) => user.email === userLogged)
  

  return (
    <Formik
      initialValues={{ amount: "", email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const { amount, email } = values;
          // Si el email a donde va el dinero esta registrado, continuo
          user.find(user => user.email === email) 
          // Si la Wallet de userLogged tiene más o igual € que el amount a enviar, continuo
          ? userLoggedWallet.wallet >= amount && amount > 0
          // Si el userLogged es diferente a quien se quiere transferir
          ? userLogged !== email
          // Si el importe a transferir es mayor a 0
          ? dispatch(
            sendMoney({
              id: counterTransactions + 1,
              date: new Date().toLocaleDateString(),
              author: userLogged,
              receiver: email.toLocaleLowerCase(),
              amount: amount,
            }, transferSuccessAlert())
          ) && navegate("/balance")
          : badYouAlert()
          : noFoundsAlert()
          : userNoRegistedAlert()
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <FormStyle>
            <FormTitle>Send Money To Others!</FormTitle>
            <Label>Email</Label>
            <Input type="email" name="email" />
            <ErrorMessages name="email" component="div" />
            <Label>Amount</Label>
            <Input type="number" name="amount" />
            <ErrorMessages name="amount" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Send Money
            </Button>
          </FormStyle>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Send;
