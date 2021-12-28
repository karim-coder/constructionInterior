import React, { useState } from "react";
import {
  FullHome,
  Bathroom,
  Kitchen,
  Floor,
  Renovate,
  Div,
  FloorAddition,
  Cost,
} from "./RenovationElements";
import Color from "../../../constants/Color";
import { LargeButton } from "../../Button";
import Header from "../../Header";

const cnst_bg = require("../../../assets/ren.jpeg").default;
const home1 = require("../../../assets/home2.png").default;
const homeWhite = require("../../../assets/home-white.png").default;
const bath1 = require("../../../assets/bath.png").default;
const bathWhite = require("../../../assets/bath-white.png").default;
const kitchen1 = require("../../../assets/kitchen.png").default;
const kitchenWhite = require("../../../assets/kitchen-white.png").default;
const floor1 = require("../../../assets/floor.png").default;
const floorWhite = require("../../../assets/floor-white.png").default;
const plus = require("../../../assets/add.png").default;
const minus = require("../../../assets/minus.png").default;

const Renovation = () => {
  const [home, setHome] = useState(false);
  const [bath, setBath] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [floor, setFloor] = useState(false);
  const [addFloor, setAddFloor] = useState(1);
  const [standard, setStandard] = useState(true);
  const [premium, setPremium] = useState(false);
  const [superPre, setSuperPre] = useState(false);
  const [luxury, setLuxury] = useState(false);
  const [costColor, setCostColor] = useState("red");
  const [cost, setCost] = useState(0);
  const [perSqft, setPerSqft] = useState(1400.0);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (event) => {
    if (!event.target.value) {
      setInputError(true);
    }
    setCost(event.target.value);
    {
      event.target.value > 0 && setInputError(false);
    }
  };

  return (
    <div
      className="row justify-content-center w-100"
      style={{ padding: 0, margin: 0 }}
    >
      <Header
        title="Problem-Free Renovation with Qualified Experts"
        bg={cnst_bg}
        type="Renovation"
      />

      <Div className="row justify-content-center">
        <Renovate
          onPress={() => {
            setHome(!home);
            bath ? setBath(!bath) : setBath(bath);
            kitchen ? setKitchen(!kitchen) : setKitchen(kitchen);
            floor ? setFloor(!floor) : setFloor(floor);
          }}
          text="Full Home Renovation"
          color={home}
          icon={home ? homeWhite : home1}
        />
        <Renovate
          onPress={() => {
            setBath(!bath);
            home ? setHome(!home) : setHome(home);
            kitchen ? setKitchen(!kitchen) : setKitchen(kitchen);
            floor ? setFloor(!floor) : setFloor(floor);
          }}
          text="Bathroom Renovation"
          color={bath}
          icon={bath ? bathWhite : bath1}
        />
        <Renovate
          onPress={() => {
            setKitchen(!kitchen);
            home ? setHome(!home) : setHome(home);
            bath ? setBath(!bath) : setBath(bath);
            floor ? setFloor(!floor) : setFloor(floor);
          }}
          text="Kitchen Renovation"
          color={kitchen}
          icon={kitchen ? kitchenWhite : kitchen1}
        />
        <Renovate
          onPress={() => {
            setFloor(!floor);
            home ? setHome(!home) : setHome(home);
            bath ? setBath(!bath) : setBath(bath);
            kitchen ? setKitchen(!kitchen) : setKitchen(kitchen);
          }}
          text="Floor Tiling Work"
          color={floor}
          icon={floor ? floorWhite : floor1}
        />
      </Div>
      <div className="row justify-content-center container ">
        {home && <FullHome />}
        {bath && <Bathroom />}
        {kitchen && <Kitchen />}
        {floor && <Floor />}
      </div>
      <div
        className="row justify-content-center "
        style={{
          marginTop: 50,
          backgroundColor: "#F8F8F6",
          alignItems: "center",
        }}
      >
        <div
          className="border"
          style={{
            maxWidth: 480,
            marginTop: 30,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, #4a148c 0px 0px 0px 1px",
          }}
        >
          <p className="" style={{ fontWeight: "bold", marginTop: 10 }}>
            Floor Addition
          </p>
        </div>
        <FloorAddition className="border">
          <p
            style={{
              fontSize: 20,
              padding: 20,
              backgroundColor: Color.primary,
              width: "100%",
              color: "white",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            Cost Estimator
          </p>
          <div className="row" style={{ textAlign: "start", margin: 30 }}>
            <label style={{ fontWeight: "bold" }}>Carpet Area (SqFt)</label>
            <input
              style={{ height: 30, marginLeft: 10 }}
              type="number"
              min="1"
              placeholder="Sqft"
              onChange={inputHandler}
            />
            {inputError && (
              <p style={{ color: "red" }}>
                *Please enter Carpet area to calculate
              </p>
            )}

            <label style={{ marginTop: 20, fontWeight: "bold" }}>
              New Floor Addition
            </label>
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                onClick={() => {
                  addFloor > 1
                    ? setAddFloor(addFloor - 1)
                    : setAddFloor(addFloor);
                  cost < 1 && setInputError(true);
                }}
                src={minus}
                style={{
                  height: 20,
                  width: 20,
                  cursor: "pointer",
                  marginTop: 10,
                }}
              />
              <p
                style={{
                  fontSize: 28,
                  marginLeft: 30,
                  marginRight: 30,
                  fontWeight: "bold",
                }}
              >
                {addFloor}
              </p>
              <img
                onClick={() => {
                  setAddFloor(addFloor + 1);
                  cost < 1 && setInputError(true);
                }}
                src={plus}
                style={{
                  height: 20,
                  width: 20,
                  cursor: "pointer",
                  marginTop: 10,
                }}
              />
            </div>
            {/* <div className="row justify-content-center ">
              <Button text="Calculate" color={Color.primary} />
            </div> */}
          </div>
        </FloorAddition>
        <div
          className="row "
          style={{
            justifyContent: "space-around",
            maxWidth: 1140,
            marginTop: 30,
          }}
        >
          <LargeButton
            text="Standard"
            color="red"
            type={standard}
            onPress={() => {
              !standard && setStandard(true);
              setPremium(false);
              setSuperPre(false);
              setLuxury(false);
              setCostColor("red");
              setPerSqft(1400.0);
            }}
          />
          <LargeButton
            text="Premium"
            color="blue"
            type={premium}
            onPress={() => {
              !premium && setPremium(true);
              setStandard(false);
              setSuperPre(false);
              setLuxury(false);
              setCostColor("blue");
              setPerSqft(1900.0);
            }}
          />
          <LargeButton
            text="Super Premium"
            color="green"
            type={superPre}
            onPress={() => {
              !superPre && setSuperPre(true);
              setStandard(false);
              setPremium(false);
              setLuxury(false);
              setCostColor("green");
              setPerSqft(2100.0);
            }}
          />
          <LargeButton
            text="Luxury"
            color="purple"
            type={luxury}
            onPress={() => {
              !luxury && setLuxury(true);
              setStandard(false);
              setSuperPre(false);
              setPremium(false);
              setCostColor("purple");
              setPerSqft(2200.0);
            }}
          />
        </div>
        <div
          style={{
            maxWidth: 1140,
            marginTop: 30,
            textAlign: "center",
          }}
        >
          <Cost color={costColor}>
            {inputError || cost < 1 ? (
              <p style={{ fontSize: 15, padding: 10, margin: 0 }}>
                Starts from ₹ {perSqft}/Per-Sqft
              </p>
            ) : (
              <>
                <p style={{ fontSize: 20, padding: 10, margin: 0 }}>
                  TOTAL COST ₹ {cost * addFloor * perSqft}
                </p>
                <p style={{ fontSize: 15, margin: 0 }}>
                  Total Buildup Area: {cost}
                </p>
                <p style={{ fontSize: 15, margin: 0, paddingBottom: 10 }}>
                  Cost Calculated @ ₹ {perSqft}
                </p>
              </>
            )}
          </Cost>
        </div>
      </div>
    </div>
  );
};

export default Renovation;

// echo "# construction" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/karim-coder/construction.git
// git push -u origin main
