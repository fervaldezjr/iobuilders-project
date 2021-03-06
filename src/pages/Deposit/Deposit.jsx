import { Button, ErrorMessages, FormContainer, FormStyle, FormTitle, Input, Label } from "../../styled-components/General.styles"
import { Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMoney } from "../../redux/actions";
import { depositSuccessAlert, moreThanZeroAlert } from "../../utils/alerts";

const Deposit = () => {
  const dispatch = useDispatch()
  const navegate = useNavigate()
  const userLogged = useSelector(state => state.logged.email)
  const counterTransactions = useSelector(state => state.transactions.length)

  return (
    <Formik
      initialValues={{ amount: '' }}
      onSubmit={(values, { setSubmitting }) => {
          const {amount} = values;
          // Si el monto a depositar es mayor a 0. Deposito Ok.
          amount > 0 
          ? dispatch(addMoney(
            {
              id: counterTransactions +1,
              date: new Date().toLocaleDateString(),
              author: "DEPOSIT",
              receiver: userLogged,
              amount,
            }, depositSuccessAlert()
            )) && navegate("/balance")
          : moreThanZeroAlert();
          setSubmitting(false);
      }}
    >
      
      {({ isSubmitting }) => (
        <FormContainer>
          <FormStyle>
            <FormTitle>Deposit Money In Your Account!</FormTitle>
            <Label>Amount</Label>
            <Input type="number" name="amount" />
            <ErrorMessages name="email" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Deposit Money
            </Button>
        </FormStyle>
        </FormContainer>
      )}
    </Formik>
  )
}

export default Deposit