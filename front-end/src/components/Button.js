import React from "react";
import styled from "styled-components";
import Color from "../constants/Color";

export const Button = (props) => {
  return (
    <div
      onClick={props.onPress}
      style={{
        cursor: "pointer",
        height: 40,
        width: 130,
        border: `1px solid ${props.color}`,
        backgroundColor: props.type ? props.color : "white",
        color: props.type ? "white" : props.color,
        textAlign: "center",
        // justifyContent: "center",
        fontSize: 18,
        paddingTop: 5,
        borderRadius: 5,
        margin: 15,
      }}
    >
      {props.text}
    </div>
  );
};
export const LargeButton = (props) => {
  return (
    <div
      onClick={props.onPress}
      style={{
        cursor: "pointer",
        marginTop: 20,
        height: 50,
        width: 250,
        opacity: 0.6,
        backgroundColor: props.type ? props.color : "white",
        color: props.type ? "white" : props.color,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18,
        paddingTop: 10,
        borderRadius: 5,
        border: `1px solid ${props.color}`,
        fontWeight: props.type && "bold",
      }}
    >
      {props.text}
    </div>
  );
};

export const Btn = styled.button`
  position: relative;
  background-color: ${Color.primary};
  border: none;
  font-size: 28px;
  color: #ffffff;
  padding: 10px;
  margin: 20px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;

  &:after {
    content: "";
    background: #7b7ff6;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export default Button;
