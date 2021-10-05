import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import FormButton from "../../components/FormButton";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import {
  AuthpageContainer,
  Main,
  MainContainer,
  ButtonsContainer,
  ButtonContainer,
  Typography,
} from "./Styles";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Authpage = () => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();
  const [loginOpen, setLoginOpen] = useState(true);

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  return (
    <AuthpageContainer>
      <Header />

      <MainContainer>
        <Main>
          {loginOpen && <Typography>Login</Typography>}
          {!loginOpen && <Typography>Sign up</Typography>}
          <ButtonsContainer>
            <ButtonContainer>
              <FormButton
                primary={loginOpen}
                onClick={() => setLoginOpen(true)}
              >
                Login
              </FormButton>
            </ButtonContainer>
            <ButtonContainer>
              <FormButton
                primary={!loginOpen}
                onClick={() => setLoginOpen(false)}
              >
                Sign up
              </FormButton>
            </ButtonContainer>
          </ButtonsContainer>

          {loginOpen && <LoginForm />}
          {!loginOpen && <RegisterForm />}
        </Main>

        {/* <h1 style={{ color: "white" }}>Back to homepage</h1> */}
      </MainContainer>
    </AuthpageContainer>
  );
};

export default Authpage;
