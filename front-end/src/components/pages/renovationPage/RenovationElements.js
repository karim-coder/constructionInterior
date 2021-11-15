import React from "react";
import styled from "styled-components";

const home = require("../../../assets/home2.png").default;
const homeWhite = require("../../../assets/home-white.png").default;

export const Div = styled.div`
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 810px) {
    margin-top: 260px;
  }
`;
export const FloorAddition = styled.div`
  width: 600px;
  height: 300px;
  background-color: white;
  margin: 10px;
  margin-top: 30px;
  text-align: center;
  border-radius: 10px;
  padding: 0;
`;

export const Cost = styled.div`
  background-color: ${(props) => props.color};
  opacity: 0.6;
  color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-weight: bold;
`;
const Icon = styled.img`
  height: 70px;
  margin-top: 20px;
`;
const Card = styled.div`
  height: 150px;
  width: 180px;
  text-align: center;
  background-color: ${(props) => (props.color ? "#4a148c" : "white")};
  color: ${(props) => (props.color ? "white" : "black")};
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: pointer;
`;

export const Renovate = ({ color, onPress, icon, text }) => {
  return (
    <Card onClick={onPress} color={color}>
      <Icon src={icon} />
      <p style={{ fontSize: 15, marginTop: 10 }}>{text}</p>
    </Card>
  );
};

const Detail = ({ title, text }) => {
  return (
    <div
      className="border"
      style={{
        width: 500,
        height: 100,
        marginTop: 10,
        textAlign: "center",
        marginLeft: 20,
        boxShadow:
          "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
      }}
    >
      <p className="" style={{ fontWeight: "bold", marginTop: 10 }}>
        {title}
      </p>
      <p style={{ color: "#716D69" }}>{text}</p>
    </div>
  );
};
export const FullHome = () => {
  return (
    <>
      <Detail
        title="Floor Tiling"
        text="Rs. 125/Sqft (vitrified) basic tile of Rs. 45/Sqft"
      />
      <Detail
        title="Renovate wardrobe"
        text="Rs.1250/Sqft (Including Loft) Non soft closing Laminates basic price of Rs. 1100/sheet"
      />
      <Detail title="Renovate Roof (Mangalore Tiles)" text="Rs.240/Sqft" />
    </>
  );
};

export const Bathroom = () => {
  return (
    <>
      <Detail
        title="Bathroom Walls"
        text="Rs. 130/Sqft including plastering (4.5 inch brick wall)"
      />
      <Detail
        title="Floor Tiling"
        text="Rs.100/Sqft (Ceramic) basic tile of Rs.30/Sqft"
      />
      <Detail
        title="Floor Tiling"
        text="Rs. 125/Sqft (vitrified) basic tile of Rs. 45/Sqft"
      />
      <Detail
        title="Shower Area"
        text="Rs. 600/Sqft (Shower enclosure openable)"
      />
      <Detail
        title="Bathroom Countertops"
        text="Rs. 400/Sqft (Granite – jet black) Basic price of Rs. 180"
      />
      <Detail title="Storage Area" text="Rs. 1550/Sqft" />
    </>
  );
};

export const Kitchen = () => {
  return (
    <>
      <Detail
        title="Kitchen Cabinets"
        text="Rs. 1200/SQft Non soft closing Laminates basic price of Rs. 1100/sheet"
      />
      <Detail
        title="Renovate Kitchen Tiles."
        text="Rs. 100/Sqft Basic price of Rs.30/Sqft"
      />
      <Detail
        title="Kitchen Flooring"
        text="Rs. 125/Sqft (vitrified) basic tile of Rs. 45/Sqft"
      />
      <Detail
        title="Renovate Sink & Faucets"
        text="Rs. 8000, Basic price of Rs.5500 (Any brand)"
      />
      <Detail
        title="Kitchen Countertops"
        text="Rs. 400/Sqft (Granite – jet black) Basic price of Rs. 180"
      />
    </>
  );
};

export const Floor = () => {
  return (
    <>
      <Detail
        title="Verified Flooring"
        text="Rs. 125/Sqft (vitrified) basic tile of Rs. 45 Sqft"
      />
      <Detail
        title="Wooden Flooring"
        text="Rs.100/Sqft (Ceramic) basic tile of Rs.30/Sqft"
      />
      <Detail
        title="Granite Flooring"
        text="Rs.450/Sqft Basic price of Rs.180/Sqft"
      />
      <Detail title="Cladding" text="Rs. 240/Sqft Basic price of Rs.140/Sqft" />
      <Detail
        title="Terracota Tiling"
        text="Rs. 110/Sqft Basic price of Rs.40/Sqft"
      />
      <Detail
        title="Antiskid Flooring"
        text="Rs. 100/Sqft Basic price of Rs.30/Sqft"
      />
    </>
  );
};
