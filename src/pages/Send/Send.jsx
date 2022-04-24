import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

const Send = () => {
  const dispatch = useDispatch();

  const userLogged = useSelector(state => state.logged.email)

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
          // console.log(JSON.stringify(values, null, 2));
          const { amount, email } = values;
          dispatch(
            sendMoney({
              id: 20,
              date: new Date().toLocaleDateString(),
              author: userLogged,
              receiver: email.toLocaleLowerCase(),
              amount: amount,
            })
          );
          console.log({
            amount: amount,
            author: userLogged,
            receiver: email.toLocaleLowerCase(),
            date: new Date().toLocaleDateString(),
            id: 20,
          });
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
