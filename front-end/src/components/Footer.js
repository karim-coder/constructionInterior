import React from "react";
import SimpleReactFooter from "simple-react-footer";
import Color from "../constants/Color";

const Footer = () => {
  const description =
    "Construction and Interior website often become a great asset to the modern Construction Business. Still there are lots of people who don't have any idea regarding where they find best Construction, what is best interior and Renovation for there property. There is also trust issues, budget issues , quality issues people face when it comes for there Construction and Interior matters. With our website it will be lot more easier for the customers to have proper guidance. We provide best Construction, Interior Design and Renovation that suits them. We provide best workers and complete our work on given time period. We also provide all categories of work like standard, premium and luxury so that it would be easier for customers to select according to there budget.We also provide sample pics of our prevoius projects and feedback report so that it will be easier for customers to trust us. We provide contact info so that for any queries they directly contact company.";
  const title = "Marine Construction and Interior";
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
