import React from "react";
import SimpleReactFooter from "simple-react-footer";
import Color from "../constants/Color";

const Footer = () => {
  const description =
    "Marine construction and interior design is a website which you can see our planes for construction and Renovation and calculate the cost and see our interior designs.";
  const title = "Marine";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Construction",
          link: "/construction",
        },
        {
          name: "Interior Design",
          link: "/interior-design",
        },
        {
          name: "Renovation",
          link: "/renovation",
        },
        {
          name: "About",
          link: "/about",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="black"
      iconColor="white"
      backgroundColor={Color.primary}
      fontColor="white"
      copyrightColor="darkgrey"
    />
  );
};

export default Footer;
