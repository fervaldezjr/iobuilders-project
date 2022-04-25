import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  margin: 1em 0;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  border-radius: 15px;
  width: 350px;
  max-width: 90%;
`;

export const FormTitle = styled.h3`
  color: white;
  font-size: 1.5em;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  text-align: left;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9em;
  color: white;
`;
export const Input = styled(Field)`
  font-weight: 600;
  font-size: 0.9em;
  padding: 0.7em;
  margin: 1em 0;
  border-radius: 20px;
  border: 1px solid gray;
  /* width: 30em; */
`;

export const ErrorMessages = styled(ErrorMessage)`
  color: tomato;
`;

export const Button = styled.button`
  color: white;
  margin: 0.5em;
  padding: 0.7em;
  font-weight: 700;
  font-size: 1em;
  background-image: linear-gradient(
    -225deg,
    #77ffd2 0%,
    #6297db 48%,
    #1eecff 100%
  );
  border-radius: 20px;
  border: none;
`;

export const AvatarImg = styled.img`
  border-radius: 45%;
`;
