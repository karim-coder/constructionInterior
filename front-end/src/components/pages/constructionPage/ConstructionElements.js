import React, { useState, Component } from "react";
import styled from "styled-components";
import _ from "lodash";

import { Btn } from "../../Button";
import Color from "../../../constants/Color";

import "./style.css";
export const Div = styled.div`
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 810px) {
    margin-top: 250px;
  }
`;

export class ConstCostEstimator extends React.Component {
  constructor() {
    super();
    this.state = {
      size: "Plot Size",
      isChecked: false,
      cost: 0,
      inputError: false,
      selectValue: "1",
      selectFloor: "0",
      isParking: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleFloorDropdownChange = this.handleFloorDropdownChange.bind(this);
    this.handlePlotDropdownChange = this.handlePlotDropdownChange.bind(this);
  }
  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }
  handleFloorDropdownChange(e) {
    this.setState({ selectFloor: e.target.value });
  }
  handlePlotDropdownChange(e) {
    this.setState({ cost: parseInt(e.target.value) });
    console.log(this.state.cost);
  }
  toggleChange = () => {
    this.setState({
      isParking: true,
      isChecked: !this.state.isChecked,
    });
    this.state.cost - this.state.selectValue * 135 < 266
      ? this.setState({
          isParking: true,
          isChecked: false,
        })
      : this.setState({
          isParking: false,
        });
  };

  handleParking = () => {
    this.setState({
      isParking: true,
    });
  };

  handleChange(event) {
    this.setState({
      size: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  inputHandler = (event) => {
    if (!event.target.value) {
      this.setState({
        inputError: true,
      });
    }
    this.setState({
      cost: event.target.value,
    });

    {
      event.target.value > 266
        ? this.setState({
            inputError: false,
          })
        : this.setState({
            inputError: true,
          });
    }
  };

  render() {
    return (
      <>
        <div
          className="border row"
          style={{
            marginTop: 50,
            backgroundColor: "#F8F8F6",
            width: 400,
            borderRadius: 5,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h4 style={{ marginTop: 15 }}>Construction Cost Estimator</h4>
          <div
            style={{
              justifyContent: "flex-start",
              textAlign: "start",
              width: 250,
              paddingTop: 20,
            }}
            onSubmit={this.handleSubmit}
          >
            <input
              className="form-check-input mt-1"
              type="radio"
              value="Plot Size"
              style={{ marginRight: 15 }}
              checked={this.state.size === "Plot Size"}
              onChange={this.handleChange}
            />
            <label>Plot Size</label>

            <input
              className="form-check-input mt-1"
              type="radio"
              value="Site Area"
              style={{ margin: 20 }}
              checked={this.state.size === "Site Area"}
              onChange={this.handleChange}
            />
            <label>Site Area</label>
            {console.log(this.state.cost)}

            <br />
            <div
              className="block row"
              style={{ justifyContent: "start", textAlign: "start" }}
            >
              {this.state.size === "Plot Size" && (
                <select
                  onChange={this.handlePlotDropdownChange}
                  style={{
                    width: 210,
                    height: 30,
                    marginLeft: 15,
                    paddingLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <option selected>Select</option>
                  <option value="1200">30 X 40</option>
                  <option value="1500">30 X 50</option>
                  <option value="2400">40 X 60</option>
                </select>
              )}
              {this.state.size === "Site Area" && (
                <label style={{ position: "relative" }}>
                  Area
                  <input
                    type="number"
                    min="1"
                    onChange={this.inputHandler}
                    style={{
                      width: 110,
                      marginLeft: 15,
                      paddingLeft: 5,
                      marginRight: 5,
                    }}
                  />
                  <span style={{ position: "absolute", top: 1 }}>Sqft</span>
                </label>
              )}

              <div className="block">
                <label style={{ margin: 5 }}>Floor</label>
                <select
                  onChange={this.handleFloorDropdownChange}
                  type="text"
                  style={{
                    width: 155,
                    marginLeft: 10,
                    marginTop: 20,
                    height: 30,
                  }}
                >
                  <option disabled>Select</option>
                  <option value="0">Ground</option>
                  <option value="1">Ground + 1</option>
                  <option value="2">Ground + 2</option>
                  <option value="3">Ground + 3</option>
                </select>
              </div>
              <div>
                {console.log(this.state.isParking)}
                <input
                  style={{ margin: 5 }}
                  type="checkbox"
                  defaultChecked={this.state.isChecked}
                  onChange={this.toggleChange}
                />
                <label style={{ margin: 5 }}>Car Parking</label>
                {this.state.isChecked && (
                  <select
                    onChange={this.handleDropdownChange}
                    style={{
                      width: 80,
                      marginLeft: 10,
                      height: 30,
                      marginTop: 10,
                    }}
                  >
                    <option selected value="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
                {this.state.isParking &&
                  this.state.cost - this.state.selectValue * 135 < 266 && (
                    <p style={{ color: "red" }}>
                      *Can't build with the given area
                    </p>
                  )}

                {/* {console.log(this.state.selectValue)} */}
                {console.log(this.state.cost - this.state.selectValue * 135)}
              </div>
            </div>
          </div>
          {/* <Button text="Estimate" color={Color.primary} type={true} /> */}

          {/* <Btn>Estimate</Btn> */}
        </div>
        {!this.state.inputError && this.state.cost > 266 && (
          <div
            className="row"
            style={{
              justifyContent: "center",
              marginTop: 60,
              backgroundColor: "#F8F8F6",
            }}
          >
            <CostEstimate
              cost={this.state.cost}
              text="STANDARD"
              perSqft={1700}
              color="red"
              carParking={parseInt(this.state.selectValue)}
              floor={parseInt(this.state.selectFloor)}
              check={this.state.isChecked}
            />
            <CostEstimate
              cost={this.state.cost}
              text="PREMIUM"
              perSqft={2300}
              color="blue"
              carParking={parseInt(this.state.selectValue)}
              floor={parseInt(this.state.selectFloor)}
              check={this.state.isChecked}
            />
            <CostEstimate
              cost={this.state.cost}
              text="SUPER PREMIUM"
              perSqft={2500}
              color="green"
              carParking={parseInt(this.state.selectValue)}
              floor={parseInt(this.state.selectFloor)}
              check={this.state.isChecked}
            />
            <CostEstimate
              cost={this.state.cost}
              text="LUXURY"
              perSqft={2700}
              color="purple"
              carParking={parseInt(this.state.selectValue)}
              floor={parseInt(this.state.selectFloor)}
              check={this.state.isChecked}
            />
          </div>
        )}
      </>
    );
  }
}

const P = styled.p`
  color: ${Color.primary};
  border-top: 2px solid ${Color.primary};
  width: 98%;
  margin-left: 4px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 20px;
  position: relative;
`;

const CostEstimate = (props) => {
  return (
    <div
      style={{
        width: 400,
        margin: 10,
        borderRadius: 10,
        padding: 0,
        marginTop: 30,
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundColor: props.color,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 10,
          opacity: 0.6,
          color: "white",
          width: "100%",
        }}
      >
        <h3>{props.text}</h3>
        <h5>{props.perSqft}/ Sqft</h5>
      </div>
      <div
        className="row"
        style={{
          justifyContent: "start",
          textAlign: "start",
          padding: 10,
        }}
      >
        <p
          style={{
            width: "98%",
            marginLeft: 4,
            paddingTop: 10,
            paddingBottom: 20,
            fontSize: 20,
            position: "relative",
          }}
        >
          <span style={{ left: 10, position: "absolute" }}>Ground Floor</span>
          <span style={{ right: 10, position: "absolute" }}>
            ₹{((props.cost * 75) / 100) * props.perSqft}
          </span>
        </p>
        <p>Total buildup({props.cost - (props.cost * 25) / 100})</p>
        {props.carParking != 0 && props.check ? (
          <>
            <p>(-)Car Projection(135 Sqft.) </p>
            <p>
              <p>
                = Actual Buildup((
                {props.cost - (props.cost * 25) / 100 - props.carParking * 135})
              </p>
            </p>
          </>
        ) : (
          <p>= Actual Buildup(({props.cost - (props.cost * 25) / 100} Sqft)</p>
        )}
        {props.floor > 0 ? (
          <>
            <p
              style={{
                width: "98%",
                marginLeft: 4,
                paddingTop: 10,
                paddingBottom: 20,
                fontSize: 20,
                position: "relative",
              }}
            >
              <span style={{ left: 10, position: "absolute" }}>
                {props.floor} Floor
              </span>
              <span style={{ right: 10, position: "absolute" }}>
                ₹{((props.cost * 80) / 100) * props.perSqft * props.floor}
              </span>
            </p>
            {_.times(props.floor, (i) => (
              <p key={i}>
                {i + 1} Floor buildup area ({(props.cost * 80) / 100} Sqft) =
                {((props.cost * 80) / 100) * props.perSqft}
              </p>
            ))}
            <P>
              <span style={{ left: 10, position: "absolute" }}>TOTAL COST</span>
              <span style={{ right: 10, position: "absolute" }}>
                ₹
                {((props.cost * 80) / 100) * props.perSqft * props.floor +
                  ((props.cost * 75) / 100) * props.perSqft}
              </span>
            </P>
          </>
        ) : (
          <P>
            <span style={{ left: 10, position: "absolute" }}>TOTAL COST</span>
            <span style={{ right: 10, position: "absolute" }}>
              ₹{((props.cost * 75) / 100) * props.perSqft}
            </span>
          </P>
        )}
      </div>
    </div>
  );
};

// export const ConstCostEstimator = () => {
//   const [inputType, setInputType] = useState("Plot Size");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     console.log(value);
//     setInputType(value);
//   };
//   const handleSubmit = (event) => {
//     console.log(inputType);
//     event.preventDefault();
//   };
// return (
//   <div
//     className="border"
//     style={{
//       marginTop: 50,
//       backgroundColor: "#F8F8F6",
//       width: 450,
//       borderRadius: 5,
//     }}
//   >
//     <h4 style={{ marginTop: 15 }}>Construction Cost Estimator</h4>
//     <div
//       style={{ justifyContent: "center", textAlign: "center" }}
//       onSubmit={handleSubmit}
//     >
//       <input
//         checked
//         type="radio"
//         name="PlotOrArea"
//         value="Plot Size"
//         style={{ margin: 15 }}
//         onChange={handleChange}
//       />
//       <label>Plot Size</label>

//       <input
//         type="radio"
//         name="PlotOrArea"
//         value="Site Area"
//         style={{ margin: 20 }}
//         onChange={handleChange}
//       />
//       <label>Site Area</label>
//       {console.log(inputType)}
//       <br />
//       <div className="block">
//         {inputType === "Plot Size" && <input />}
//         {inputType === "Site Area" && (
//           <label style={{ position: "relative" }}>
//             Plot Size
//             <input
//               type="number"
//               style={{
//                 width: 110,
//                 marginLeft: 15,
//                 paddingLeft: 5,
//                 marginRight: 5,
//               }}
//             />
//             <span style={{ position: "absolute", top: 1 }}>Sqft</span>
//           </label>
//         )}
//       </div>
//     </div>
//   </div>
// );
// };
