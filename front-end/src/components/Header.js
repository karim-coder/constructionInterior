import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

import Color from "../constants/Color";

const Main = styled.div`
  height: 70vh;
  width: 100%;
  text-align: center;
  justify-content: space-around;
  color: white;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter-brightness(50%);
`;
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
const Header = ({ title, text, bg }) => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    setSubmitted(true);
  };
  return (
    <Main className="row" bg={bg}>
      <div className="col" style={{ maxWidth: "50%", minWidth: 400 }}>
        <p
          style={{
            fontSize: 45,
            fontWeight: "bold",
            marginTop: "10%",
            textShadow: `4px 4px 4px black`,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: 21,
            textShadow: `3px 3px 3px  ${Color.primary}`,
          }}
        >
          {text}
        </p>
      </div>
      <Form className="col border-primary">
        {!submitted ? (
          <>
            <Input placeholder="Your name" type="text" />
            <Input placeholder="Your contact number" type="number" />
            <Input placeholder="Your email" type="email" />
            <Input placeholder="Your city" type="text" />
            <button
              onClick={submitHandler}
              style={{ flex: 1, margin: 20 }}
              type="submit"
              class="btn btn-primary btn-lg btn-block"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h3 style={{ marginTop: 30 }}>
              Thank you for sharing the details.
            </h3>
            <p>
              Your details have been sent to our team and they will get back to
              you shortly.
            </p>
          </>
        )}
      </Form>
    </Main>
  );
};

export default Header;
