import { WarningOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSignUpErrors,
  signUpUserStart,
} from "../../redux/User/user.actions";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import {
  Form,
  FormContainer,
  ErrorsContainer,
  Error,
  Typography,
  FormBody,
} from "../LoginForm/Styles";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  signUpErrors: user.signUpErrors,
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { signUpErrors } = useSelector(mapState);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword,
      })
    );
  };

  useEffect(() => {
    if (Array.isArray(signUpErrors) && signUpErrors.length > 0) {
      setErrors(signUpErrors);
    }
  }, [signUpErrors]);

  useEffect(() => {
    return () => {
      dispatch(handleSignUpErrors({}));
    };
  }, [dispatch]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <FormInput
            name="displayName"
            type="text"
            label="Username"
            value={displayName}
            handleChange={(e) => setDisplayName(e.target.value)}
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.length > 0 && (
            <ErrorsContainer>
              {errors.map((err, index) => {
                return (
                  <Error key={index}>
                    <WarningOutlined />
                    <Typography>{err}</Typography>
                  </Error>
                );
              })}
            </ErrorsContainer>
          )}
        </FormBody>
        <FormButton type="submit" primary>
          Sign Up
        </FormButton>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
