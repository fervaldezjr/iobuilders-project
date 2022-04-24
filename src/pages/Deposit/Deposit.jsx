import { Button, ErrorMessages, FormContainer, FormStyle, FormTitle, Input, Label } from "../../styled-components/General.styles"
import { Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMoney } from "../../redux/actions";

const Deposit = () => {
  const dispatch = useDispatch()
  const userLogged = useSelector(state => state.logged.email)
  const counterTransactions = useSelector(state => state.transactions.length)

  return (
    <Formik
      initialValues={{ amount: '' }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.amount) {
      //     errors.amount = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.amount)
      //   ) {
      //     errors.amount = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          const {amount} = values;
          dispatch(addMoney(
            {
              id: counterTransactions +1,
              date: new Date().toLocaleDateString(),
              author: "DEPOSIT",
              receiver: userLogged,
              amount,
            }
          ))
          setSubmitting(false);
        }, 400);
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