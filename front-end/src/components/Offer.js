import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.color});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.6s;
  border-radius: 10px;
  // border: 10px solid green;
  transform: scale(1.05);

  &:hover {
    transform: scale(1.2);
    filter: brightness(65%);
  }
`;
const Item = styled.a`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 550px) {
    width: 450px;
    height: 450px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  text-shadow: 3px 3px 3px #ea4492;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  padding: 40px;
  text-decoration: none;
`;

const Offer = (props) => {
  return (
    <Item
      color={props.icon}
      href={props.link}
      height={props.height}
      width={props.width}
    >
      <Image color={props.icon} />
      <Text>{props.title}</Text>
    </Item>
  );
};
export const Offer1 = (props) => {
  return (
    // <div
    //   style={{
    //     position: "absolute",
    //     textShadow: "3px 3px 3px  #ea4492",
    //     fontSize: 40,
    //     fontWeight: "bold",
    //     color: "#ffffff",
    //     bottom: 0,
    //     padding: 40,
    //     textDecoration: "none",
    //     height: props.height,
    //     width: props.width,
    //     backgroundImage: props.icon,
    //   }}
    // >
    <Link
      style={{
        width: props.width,
        height: props.height,
        margin: 20,
        overflow: "hidden",
        position: "relative",
        borderRadius: 20,
        boxShadow: "0 70px 40px -20px rgba(0, 0, 0, 0.2)",
      }}
      // color={props.icon}
      // height={props.height}
      // width={props.width}
      to={props.link}
    >
      <Image color={props.icon} />
      {/* <img src={props.icon} /> */}
      <Text>{props.title}</Text>
    </Link>
    // </div>
  );
};

export default Offer;
