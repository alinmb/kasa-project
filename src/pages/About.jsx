import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  // const data = [
  //   {
  //     title: "Fiabilité",
  //     content: "blablabla",
  //   },
  //   {
  //     title: "Respect",
  //     content: "blablabla",
  //   },
  //   {
  //     title: "Service",
  //     content: "blablabla",
  //   },
  //   {
  //     title: "Sécurité",
  //     content: "blablabla",
  //   },
  // ];
  return (
    <div className="about">
      <Navbar />
      <div className="about__img"></div>
      <Footer />
    </div>
  );
};

export default About;
