import { useDispatch, useSelector } from "react-redux";
import { setLogin, addUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ErrorMessages,
  FormContainer,
  FormStyle,
  FormTitle,
  Input,
  Label,
  LabelContainer,
} from "../../styled-components/General.styles";
import { Formik } from "formik";
import { emailAlreadyUsedAlert } from "../../utils/alerts";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let navegate = useNavigate();

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
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
          console.log(JSON.stringify(values, null, 2));
          const { firstName, lastName, email, password } = values;
          // 
          user.find((user) => user.email === email.toLowerCase())
            ? emailAlreadyUsedAlert()
            : dispatch(
                addUser({
                  firstName,
                  lastName,
                  email:email.toLowerCase(),
                  password,
                  wallet: 0,
                })
              ) &&
              dispatch(
                setLogin({
                  email: email.toLowerCase(),
                  logged: true,
                })
              ) && navegate("/balance");
          setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <FormStyle>
            <FormTitle>Sign Up!</FormTitle>
            <LabelContainer>
              <Label>First Name</Label>
            </LabelContainer>
            <Input type="text" name="firstName" />
            <ErrorMessages name="email" component="div" />
            <Label>Last Name</Label>
            <Input type="text" name="lastName" />
            <ErrorMessages name="email" component="div" />
            <Label>Email</Label>
            <Input type="email" name="email" />
            <ErrorMessages name="email" component="div" />
            <Label>Password</Label>
            <Input type="password" name="password" />
            <ErrorMessages name="email" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </FormStyle>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Signup;
