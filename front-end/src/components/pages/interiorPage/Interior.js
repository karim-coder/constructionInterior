import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../Header";
import { Offer1 } from "../../Offer";
const id_bg = require("../../../assets/id_bg.jpg").default;

const Div = styled.div`
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 810px) {
    margin-top: 260px;
  }
`;

const Interior = () => {
  const [param, setParam] = useState("");

  const newTo = [
    {
      pathname: "/interior-design/gallery",
      param1: "Modern",
    },
    {
      pathname: "/interior-design/gallery",
      param1: "Contemporary",
    },
    {
      pathname: "/interior-design/gallery",
      param1: "Minimalsitic",
    },
    {
      pathname: "/interior-design/gallery",
      param1: "Vintage",
    },
    {
      pathname: "/interior-design/gallery",
      param1: "European",
    },
  ];

  return (
    <div
      className="row justify-content-center w-100"
      style={{ margin: 0, padding: 0, width: "100%" }}
    >
      <Header
        title="Creating excellent spaces"
        text="100% Hassle - Free and managed by us!"
        bg={id_bg}
      />
      <Div className="row justify-content-center">
        <h4
          style={{
            textAlign: "center",
            width: 200,
            padding: 10,
          }}
          className="border-bottom"
        >
          Themes
        </h4>
      </Div>
      <div className="row justify-content-center">
        <Offer1
          height={200}
          width={450}
          icon="http://cdn.home-designing.com/wp-content/uploads/2018/01/grey-quilted-couches-large-photograph-grey-shade-living-room.jpg"
          title="Modern"
          link={newTo[0]}
        />
        <Offer1
          height={200}
          width={450}
          icon="https://media.architecturaldigest.com/photos/5744d37dff9db5a43d5cf9c6/master/w_1920%2Cc_limit/contemporary-interior-design-004.jpg"
          title="Contemporary"
          link={newTo[1]}
        />

        <Offer1
          height={200}
          width={450}
          icon="http://cdn.home-designing.com/wp-content/uploads/2017/11/dark-grey-geometric-living-room-minimalist.jpg"
          title="Minimalsitic"
          link={newTo[2]}
        />
        <Offer1
          height={200}
          width={450}
          icon="https://shhoonya.com/wp-content/uploads/2020/01/home-interiors.jpg"
          title="Vintage"
          link={newTo[3]}
        />
        <Offer1
          height={200}
          width={450}
          icon="https://royalzig.com/wp-content/uploads/2020/08/Golden-European-Style-Collection-Living-Room-Set.jpg"
          title="European"
          link={newTo[4]}
        />
      </div>
    </div>
  );
};

export default Interior;
