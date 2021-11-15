import React from "react";
import styled from "styled-components";

const home = require("../../../assets/home2.png").default;
const homeWhite = require("../../../assets/home-white.png").default;

const Icon = styled.img`
  height: 70px;
  margin-top: 20px;
`;

const Renovate = ({ color, onPress, icon, text }) => {
  const Card = styled.div`
    height: 150px;
    width: 180px;
    text-align: center;
    background-color: ${color ? "#4a148c" : "white"};
    color: ${color ? "white" : "black"};
    margin: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
  `;
  return (
    <Card onClick={onPress}>
      <Icon src={icon} />
      <p style={{ fontSize: 15, marginTop: 10 }}>{text}</p>
    </Card>
  );
};

export default Renovate;
