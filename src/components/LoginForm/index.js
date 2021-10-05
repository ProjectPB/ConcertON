import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emailSignInStart,
  handleSignInErrors,
} from "../../redux/User/user.actions";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import { WarningOutlined } from "@material-ui/icons";
import { FormContainer, Form, ErrorsContainer, Error } from "./Styles";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  signInErrors: user.signInErrors,
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { signInErrors } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  useEffect(() => {
    if (Array.isArray(signInErrors) && signInErrors.length > 0) {
      setErrors(signInErrors);
    }
  }, [signInErrors]);

  useEffect(() => {
    return () => {
      dispatch(handleSignInErrors({}));
    };
  }, [dispatch]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Form>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        {errors.length > 0 && (
          <ErrorsContainer>
            {errors.map((err, index) => {
              return (
                <Error key={index}>
                  <WarningOutlined />
                  {err}
                </Error>
              );
            })}
          </ErrorsContainer>
        )}
        <FormButton type="submit">Login</FormButton>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
