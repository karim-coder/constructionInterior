import React from "react";
import SimpleReactFooter from "simple-react-footer";
import Color from "../constants/Color";

const Footer = () => {
  const description =
    "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. ";
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
