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
    "Solving the issue of rising customer acquisition costs for brands while driving consumer product discover and additional income for everyday families.",
  icons: [
    {
      icon: (
        <FaMapMarkerAlt color={mavelycolor} size="2em" />
      ),
      text: "Founded June 2018"
    },
    {
      icon: <FaBuilding color={mavelycolor} size="2em" />,
      text: "Offices Chicago"
    },
    {
      icon: (
        <FaShoppingBasket color={mavelycolor} size="2em" />
      ),
      text: "Shopping ReDefined"
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
