import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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
const Form = styled.form`
  height: 450px;
  max-width: 400px;
  min-width: 400px;
  background-color: #4a148c;
  margin-top: 5%;
  opacity: 0.8;
  border-radius: 10px;
  @media screen and (max-width: 810px) {
    margin-top: 15%;
  }
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameValid, setUserNameValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
    if (userName.length >= 1) {
      setUserNameValid("");
    }
    setError(false);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    if (password.length >= 1) {
      setPasswordValid("");
    }
    setError(false);
  };

  async function postAdminLogin(e) {
    e.preventDefault();
    if (userName.length < 1) {
      setUserNameValid("Enter your username");
      setError(false);
    } else {
      setUserNameValid("");
    }
    if (password.length < 1) {
      setPasswordValid("Enter your password");
      setError(false);
      // } else if (password.length < 5) {
      //   setPasswordValid("Password is too short");
      //   setError(false);
    } else {
      setPasswordValid("");
    }

    if (userName.length >= 1 && password.length >= 1) {
      try {
        await axios
          .post("http://localhost:3000/signin", {
            userName,
            password,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log(res.data.token);
          });

        setAuthorized(true);
        setError(false);
      } catch (error) {
        setAuthorized(false);
        setError(true);
        setUserName("");
        setPassword("");
      }
    }
  }
  if (authorized) {
    return <Redirect to={"/admin/orders"} />;
  }

  return (
    <div
      className=" row"
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      <Form className="col border-primary">
        <h3 style={{ color: "white", marginTop: 20 }}>Login For Admin</h3>
        <Input
          value={userName}
          onChange={handleUserNameInput}
          placeholder="User Name"
          type="username"
          autoComplete="off"
        />
        {userNameValid !== "" && (
          <p style={{ color: "red", marginTop: 20 }}>{userNameValid}</p>
        )}
        <Input
          value={password}
          onChange={handlePasswordInput}
          placeholder="Your password"
          type="password"
          autoComplete="off"
        />
        {passwordValid !== "" && (
          <p style={{ color: "red", marginTop: 20 }}>{passwordValid}</p>
        )}
        {error && (
          <p style={{ color: "red", marginTop: 20 }}>
            Invalid username or password
          </p>
        )}
        <button
          onClick={postAdminLogin}
          style={{ flex: 1, margin: 20 }}
          type="submit"
          className="btn btn-primary btn-lg btn-block"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
