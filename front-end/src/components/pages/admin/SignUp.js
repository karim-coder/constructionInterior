import React, { useState } from "react";
import styled from "styled-components";
import Orders from "./Orders";

const Input = styled.input`
  width: 90%;
  height: 50px;
  padding: 5px;
  margin-top: 30px;
  border: 0;
  border-bottom: 1px solid;
  outline: none;
  font-size: 20px;
  background-color: #4a148c;
  color: white;
  border-radius: 4px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const Form = styled.div`
  height: ${(props) => (props.width ? 530 : 380)}px;
  max-width: 400px;
  min-width: 400px;
  background-color: #4a148c;
  margin-top: 5%;
  opacity: 0.8;
  border-radius: 10px;
`;

const SingUp = () => {
  const adminDetail = {
    userName: "karim",
    password: "12345",
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [login, setLogin] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const loginHandler = () => {
    if (
      userName === adminDetail.userName &&
      password === adminDetail.password
    ) {
      setLogin(false);
    } else {
      setError(true);
    }
  };
  const signInHandler = () => {
    if (
      userName === adminDetail.userName &&
      password === adminDetail.password
    ) {
      setAuthorized(true);
    } else {
      setError(true);
    }
  };

  const textHandler = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      {!authorized ? (
        <Form className="col border-primary" width={signIn}>
          {login ? (
            <>
              <h3 style={{ color: "white", marginTop: 20 }}>Login For Admin</h3>

              <Input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User Name"
                type="username"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                type="password"
              />
              {error && (
                <p style={{ color: "red", marginTop: 20 }}>
                  Invalid username or password.
                </p>
              )}
              <button
                onClick={loginHandler}
                style={{ flex: 1, margin: 20 }}
                type="submit"
                class="btn btn-primary btn-lg btn-block"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h3 style={{ color: "white", marginTop: 20 }}>
                {signIn ? "Sign Up" : "Sign In"} Form
              </h3>
              {signIn ? (
                <>
                  <Input placeholder="Your name" type="text" />
                  <Input placeholder="Your contact number" type="number" />
                  <Input placeholder="Your email" type="email" />
                  <Input placeholder="Your password" type="password" />
                  <button
                    // onClick={signInHandler}
                    style={{ flex: 1, margin: 20 }}
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <Input placeholder="Your email" type="email" />
                  <Input placeholder="Your password" type="password" />
                  {error && (
                    <p style={{ color: "red", marginTop: 20 }}>
                      Invalid username or password.
                    </p>
                  )}
                  <button
                    onClick={signInHandler}
                    style={{ flex: 1, margin: 20 }}
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Sign In
                  </button>
                </>
              )}

              {signIn ? (
                <p style={{ color: "white" }}>
                  Already registered{" "}
                  <span
                    onClick={textHandler}
                    style={{
                      color: "#00FFFF",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Sign In
                  </span>
                </p>
              ) : (
                <p style={{ color: "white" }}>
                  Don't have an account{" "}
                  <span
                    onClick={textHandler}
                    style={{
                      color: "#00FFFF",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              )}
            </>
          )}
        </Form>
      ) : (
        <Orders />
      )}
    </>
  );
};

export default SingUp;
