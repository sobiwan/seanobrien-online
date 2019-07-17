/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaAd,
  FaDatabase,
  FaMedal,
  FaHandHoldingUsd,
  FaGoogle
} from "react-icons/fa";
import Swyft from "../../../../../resources/images/swyft.png";
import SwyftIphone from "../../../../../resources/images/swyft-screenshot.png";

const swyftcolor = "#4691b1";

export default {
  name: "Swyft",
  logo: Swyft,
  color: swyftcolor,
  leftgutterText:
    "The first and largest emoji content network driving brand awareness and digital licensing revenue for the worlds top brands such as Disney, Universal, NFL, Starbucks and more. Swyft pioneered native brand engagement in the mobile messaging market.",
  icons: [
    {
      icon: (
        <FaMapMarkerAlt color={swyftcolor} size="2em" />
      ),
      text: "Founded March 2012"
    },
    {
      icon: (
        <FaMoneyCheckAlt color={swyftcolor} size="2em" />
      ),
      text: "Acquired in 2015 by Monotype"
    },
    {
      icon: <FaAd color={swyftcolor} size="2em" />,
      text: "Advertising Pioneers"
    }
  ],
  links: [
    {
      icon: <FaDatabase color={swyftcolor} size="2em" />,
      link:
        "https://www.crunchbase.com/organization/textpride#section-overview"
    },
    {
      icon: <FaMedal color={swyftcolor} size="2em" />,
      link:
        "https://www.forbes.com/profile/swyft-media/#60940a1f6f38"
    },
    {
      icon: (
        <FaHandHoldingUsd color={swyftcolor} size="2em" />
      ),
      link:
        "https://techcrunch.com/2015/02/02/monotype-acquires-swyft-media/"
    },
    {
      icon: <FaGoogle color={swyftcolor} size="2em" />,
      link:
        "https://www.businesswire.com/news/home/20170831006198/en/Swyft-Media-Partners-Google-Extend-Brand-Reach"
    }
  ],
  rightGutterImage: SwyftIphone
};
