import React from "react";

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
