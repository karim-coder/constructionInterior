import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/data").then(function (response) {
      setDetails(response.data);
    });
  }, [details]);

  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 50,
      }}
    >
      <table class="table table-striped table-dark">
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
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{details[i].name}</td>
              <td>{details[i].number}</td>
              <td>{details[i].email}</td>
              <td>{details[i].city}</td>
              <td>{details[i].type}</td>
              <td>{details[i].date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Orders;
