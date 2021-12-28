import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const SmallImage = styled.img`
  width: ${(props) => (props.press ? 1000 : 300)}px;
  height: ${(props) => (props.press ? 600 : 180)}px;
  margin: 10px;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const LargeImage = (props) => {
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src={props.src}
        zoomSrc={props.src}
        style={{
          height: 500,
          width: 1000,
          cursor: "pointer",
          marginTop: 0,
        }}
      />
      Large Image
    </div>
  );
};
export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <a
        className="row"
        onClick={handleClose}
        style={{
          color: "white",
          marginRight: "10%",
          marginTop: 50,
          fontSize: 35,
          cursor: "pointer",
          textDecoration: "none",
          justifyContent: "right",
        }}
      >
        &#x2715;
      </a>
      <div
        className="modal-container"
        style={{
          position: "absolute",
          width: "60%",
          backgroundColor: "#ffffff",
          left: "20%",
          top: "10%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Image = (props) => {
  const [modal, setModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [interiorData, setInteriorData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios.get("http://localhost:3000/interior").then(function (response) {
      setInteriorData(response.data);
    });
  }, []);

  console.log(interiorData);
  const a = interiorData.filter((image) => image.theme === props.theme);
  const b = a.filter((image) => image.type === props.type);

  const modalClose = () => {
    setModal(false);
  };

  return (
    <div>
      <h3>{props.theme}</h3>
      <div
        className="row"
        style={{
          justifyContent: "center",
        }}
      >
        {b.map((image, i) => (
          <div
            className="col-4"
            key={i}
            style={{
              minWidth: 300,
            }}
          >
            {props.living &&
              image.type === "livingRoom" &&
              image.theme === props.theme && (
                <SmallImage
                  key={i}
                  src={image.url}
                  onClick={() => {
                    setImgUrl(image.url);
                    setModal(true);
                  }}
                />
              )}

            {props.bed &&
              image.type === "bedRoom" &&
              image.theme === props.theme && (
                <SmallImage
                  key={i}
                  src={image.url}
                  onClick={() => {
                    setImgUrl(image.url);
                    setModal(true);
                  }}
                />
              )}

            {props.kitchen &&
              image.type === "kitchen" &&
              image.theme === props.theme && (
                <SmallImage
                  src={image.url}
                  key={i}
                  onClick={() => {
                    setImgUrl(image.url);
                    setModal(true);
                  }}
                />
              )}
          </div>
        ))}
        {modal && (
          <div
            className="App"
            style={{
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Modal show={modal} handleClose={modalClose}>
              <img
                className="col"
                src={imgUrl}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};
