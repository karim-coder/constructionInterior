import React, { useState, useEffect } from "react";
import axios from "axios";
import Color from "../../../constants/Color";
import Button from "../../Button";
import { Redirect } from "react-router-dom";

import styled from "styled-components";

export const SmallImage = styled.img`
  width: ${(props) => (props.press ? 1000 : 300)}px;
  height: ${(props) => (props.press ? 600 : 180)}px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Orders = () => {
  const [details, setDetails] = useState([]);

  const [all, setAll] = useState(true);
  const [construction, setConstruction] = useState(false);
  const [interior, setInterior] = useState(false);
  const [renovation, setRenovation] = useState(false);
  const [logout, setLogout] = useState(false);
  var c = 1;

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios.get("http://localhost:3000/orders", config).then(function (response) {
      setDetails(response.data);
    });
  }, []);
  const Logout = async () => {
    await localStorage.removeItem("token");
    setDetails([]);
    setLogout(true);
  };

  if (logout) {
    return <Redirect to={"/admin"} />;
  }

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div
          style={{
            paddingLeft: "20%",
            paddingRight: "20%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 50,
          }}
        >
          <button
            style={{ margin: 20, float: "right" }}
            className="btn btn-primary btn-lg btn-block"
            onClick={Logout}
          >
            Log out
          </button>

          <div className="row" style={{ backgroundColor: "whitesmoke" }}>
            <Button
              text="All"
              color={Color.primary}
              type={all}
              onPress={() => {
                setAll(true);
                setConstruction(false);
                setInterior(false);
                setRenovation(false);
              }}
            />
            <Button
              text="Construction"
              color={Color.primary}
              type={construction}
              onPress={() => {
                setAll(false);
                setConstruction(true);
                setInterior(false);
                setRenovation(false);
              }}
            />
            <Button
              text="Interior"
              color={Color.primary}
              type={interior}
              onPress={() => {
                setAll(false);
                setConstruction(false);
                setInterior(true);
                setRenovation(false);
              }}
            />
            <Button
              text="Renovation"
              color={Color.primary}
              type={renovation}
              onPress={() => {
                setAll(false);
                setConstruction(false);
                setInterior(false);
                setRenovation(true);
              }}
            />
          </div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {details.map((image, i) => (
              <tbody key={i}>
                {all ? (
                  <tr key={c}>
                    <th scope="row">{i + 1}</th>
                    <td>{details[i].name}</td>
                    <td>{details[i].number}</td>
                    <td>{details[i].email}</td>
                    <td>{details[i].city}</td>
                    <td>{details[i].type}</td>
                    <td>{details[i].date}</td>
                  </tr>
                ) : null}

                {construction && details[i].type === "Construction" ? (
                  <tr key={c}>
                    <th scope="row">{c}</th>
                    <td>{details[i].name}</td>
                    <td>{details[i].number}</td>
                    <td>{details[i].email}</td>
                    <td>{details[i].city}</td>
                    <td>{details[i].type}</td>
                    <td>
                      {details[i].date}
                      {(c = c + 1)}
                    </td>
                  </tr>
                ) : null}
                {interior && details[i].type === "Interior Design" ? (
                  <tr key={c}>
                    <th scope="row">{c}</th>
                    <td>{details[i].name}</td>
                    <td>{details[i].number}</td>
                    <td>{details[i].email}</td>
                    <td>{details[i].city}</td>
                    <td>{details[i].type}</td>
                    <td>
                      {details[i].date}
                      {(c = c + 1)}
                    </td>
                  </tr>
                ) : null}
                {renovation && details[i].type === "Renovation" ? (
                  <tr key={c}>
                    <th scope="row">{c}</th>
                    <td>{details[i].name}</td>
                    <td>{details[i].number}</td>
                    <td>{details[i].email}</td>
                    <td>{details[i].city}</td>
                    <td>{details[i].type}</td>
                    <td>
                      {details[i].date}
                      {(c = c + 1)}
                    </td>
                  </tr>
                ) : null}
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <>
          <div>You are not logged in</div>
        </>
      )}
    </div>
  );
};

export default Orders;
