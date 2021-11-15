import React, { useState } from "react";
import Button from "../../Button";
import Color from "../../../constants/Color";
import { Image } from "./GalleryElements";
import "./style.css";

const Gallery = (props) => {
  const [living, setLiving] = useState(true);
  const [bed, setBed] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [modern, setModern] = useState(
    props.location.param1 === "Modern" && true
  );
  const [contemporary, setContemporary] = useState(
    props.location.param1 === "Contemporary" && true
  );
  const [minimalsitic, setMinimalsitic] = useState(
    props.location.param1 === "Minimalsitic" && true
  );
  const [vintage, setVintage] = useState(
    props.location.param1 === "Vintage" && true
  );
  const [european, setEuropean] = useState(
    props.location.param1 === "European" && true
  );
  const [type, setType] = useState("livingRoom");

  return (
    <div
      className="row"
      style={{
        textAlign: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="row border"
        style={{
          justifyContent: "center",
          textAlign: "center",
          margin: 20,
          maxWidth: 600,
        }}
      >
        <Button
          text="Living rooms"
          color={Color.primary}
          type={living}
          onPress={() => {
            setLiving(true);
            setBed(false);
            setKitchen(false);
            setType("livingRoom");
          }}
        />
        <Button
          text="Bedroom"
          color={Color.primary}
          type={bed}
          onPress={() => {
            setLiving(false);
            setBed(true);
            setKitchen(false);
            setType("bedRoom");
          }}
        />
        <Button
          text="Kitchen"
          color={Color.primary}
          type={kitchen}
          onPress={() => {
            setLiving(false);
            setBed(false);
            setKitchen(true);
            setType("kitchen");
          }}
        />
      </div>

      <div
        className="row"
        style={{
          backgroundColor: "#F8F8F6",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="border col-2 "
          style={{
            minWidth: 300,
            margin: 15,
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <h4>Filter by Themes</h4>
          <div
            className="row"
            style={{
              justifyContent: "center",
            }}
          >
            <Button
              text="Modern"
              color={Color.primary}
              type={modern}
              onPress={() => {
                setModern(true);
                setContemporary(false);
                setMinimalsitic(false);
                setVintage(false);
                setEuropean(false);
              }}
            />
            <Button
              text="Contemporary"
              color={Color.primary}
              type={contemporary}
              onPress={() => {
                setModern(false);
                setContemporary(true);
                setMinimalsitic(false);
                setVintage(false);
                setEuropean(false);
              }}
            />
            <Button
              text="Minimalsitic"
              color={Color.primary}
              type={minimalsitic}
              onPress={() => {
                setModern(false);
                setContemporary(false);
                setMinimalsitic(true);
                setVintage(false);
                setEuropean(false);
              }}
            />
            <Button
              text="Vintage"
              color={Color.primary}
              type={vintage}
              onPress={() => {
                setModern(false);
                setContemporary(false);
                setMinimalsitic(false);
                setVintage(true);
                setEuropean(false);
              }}
            />
            <Button
              text="European"
              color={Color.primary}
              type={european}
              onPress={() => {
                setModern(false);
                setContemporary(false);
                setMinimalsitic(false);
                setVintage(false);
                setEuropean(true);
              }}
            />
          </div>
        </div>
        <div
          className="col border"
          style={{ maxWidth: 1000, margin: 15, backgroundColor: "white" }}
        >
          <div className="row" style={{ justifyContent: "space-between" }}>
            {modern && (
              <Image
                living={living}
                bed={bed}
                kitchen={kitchen}
                theme="Modern"
                type={type}
              />
            )}
            {contemporary && (
              <Image
                living={living}
                bed={bed}
                kitchen={kitchen}
                theme="Contemporary"
                type={type}
              />
            )}
            {minimalsitic && (
              <Image
                living={living}
                bed={bed}
                kitchen={kitchen}
                theme="Minimalsitic"
                type={type}
              />
            )}
            {vintage && (
              <Image
                living={living}
                bed={bed}
                kitchen={kitchen}
                theme="Vintage"
                type={type}
              />
            )}
            {european && (
              <Image
                living={living}
                bed={bed}
                kitchen={kitchen}
                theme="European"
                type={type}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
