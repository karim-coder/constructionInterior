import React from "react";

import "./style.css";

const Promise = (props) => {
  return (
    <div className="zoom row justify-content-center" style={styles.card}>
      <img className="col" style={styles.icon} src={props.icon} />

      <p
        className=" row"
        style={{
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {props.title}
      </p>
      <p
        className=" row"
        style={{
          justifyContent: "center",
          textAlign: "center",
          fontSize: 20,
          // color: "#555555",
        }}
      >
        {props.content}
      </p>
    </div>
  );
};

const styles = {
  card: {
    width: 400,
    margin: 20,
  },
  icon: {
    maxWidth: 90,
    height: "20%",
    textAlign: "center",
    margin: 20,
  },
};

export default Promise;
