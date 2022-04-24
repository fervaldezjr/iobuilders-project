import { Button, ErrorMessages, FormContainer, FormStyle, FormTitle, Input, Label } from "../../styled-components/General.styles"
import { Formik } from 'formik';

const Deposit = () => {
  return (
    <Formik
      initialValues={{ amount: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
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