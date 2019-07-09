/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaHome,
  FaMobileAlt,
  FaShoppingBasket,
  FaFacebook,
  FaGraduationCap
} from "react-icons/fa";
import Mavely from "../../../../../resources/images/mavely.png";
import MavelyIphone from "../../../../../resources/images/mavely_screenshot.png";

const mavelycolor = "#ea1852";

export default {
  name: "Mavely",
  logo: Mavely,
  color: mavelycolor,
  leftgutterText:
    "The first and largest emoji content network driving brand awareness and digital licensing revenue for the worlds top brands such as Disney, Universal, NFL, Starbucks and more. Swyft pioneered native brand engagement in the mobile messaging market.",
  icons: [
    {
      icon: (
        <FaMapMarkerAlt color={mavelycolor} size="2em" />
      ),
      text: "Founded June 2018"
    },
    {
      icon: <FaBuilding color={mavelycolor} size="2em" />,
      text: "Offices Chicago, IL"
    },
    {
      icon: (
        <FaShoppingBasket color={mavelycolor} size="2em" />
      ),
      text: "Shopping Re-Defined"
    }
  ],
  links: [
    {
      icon: <FaHome color={mavelycolor} size="2em" />,
      link: "https://mavely.life"
    },
    {
      icon: <FaMobileAlt color={mavelycolor} size="2em" />,
      link: "https://mavely.life/download"
    },
    {
      icon: <FaFacebook color={mavelycolor} size="2em" />,
      link: "https://www.facebook.com/MavelyApp/"
    },
    {
      icon: (
        <FaGraduationCap color={mavelycolor} size="2em" />
      ),
      link: "https://learn.mavely.life/"
    }
  ],
  rightGutterImage: MavelyIphone
};
