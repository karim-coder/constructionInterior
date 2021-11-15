import React from "react";
import { FcCheckmark } from "react-icons/fc";

const Package = (props) => {
  return (
    <div
      className="border"
      style={{
        height: 200,
        width: 250,
        margin: 20,
        padding: 0,
        borderRadius: 5,
      }}
    >
      <div
        style={{
          backgroundColor: props.color,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          color: "white",
          opacity: 0.6,
          width: "100%",
        }}
      >
        <h4>{props.title}</h4>
        <h5>{props.area}</h5>
      </div>

      <div
        className="row"
        style={{ textAlign: "left", fontSize: 14, padding: 5 }}
      >
        <FcCheckmark className="col-2" style={{ marginTop: 4 }} />
        <p className="col-10" style={{ margin: 0, padding: 0 }}>
          {props.text1}
        </p>
        <FcCheckmark className="col-2" style={{ marginTop: 4 }} />
        <p className="col-10" style={{ margin: 0, padding: 0 }}>
          {props.text2}
        </p>
      </div>
      {/* <button
        type="button"
        className="btn "
        style={{
          marginTop: 10,
          backgroundColor: props.color,
          opacity: 0.6,
          color: "white",
        }}
      >
        VIEW MORE
      </button> */}
    </div>
  );
};

const styles = {
  checkMark: {
    margin: 5,
  },
};
export default Package;
