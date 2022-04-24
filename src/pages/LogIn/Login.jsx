import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let navegate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
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

          const { email, password } = values;

          //validar si existe el usuario
          user.find(
            (user) =>
              user.email === email.toLowerCase() &&
              user.password === password.toLowerCase()
          ) //si existe logueamos
            ? dispatch(
                setLogin({
                  email: email.toLowerCase(),
                  logged: true,
                })
              ) && navegate("/balance")
            : console.log("Usuario o contraseña incorrecta");
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <FormStyle>
              <FormTitle>Let's Go!</FormTitle>
              <Label>Email</Label>
              <Input type="email" name="email" />
              <ErrorMessages name="email" component="div" />
              <Label>Password</Label>
              <Input type="password" name="password" />
              <ErrorMessages name="email" component="div" />
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </FormStyle>
          </FormContainer>
        )}
      </Formik>
    </div>
  );
};

export default Login;
