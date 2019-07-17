/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaChartLine,
  FaUtensils,
  FaTools,
  FaSearchLocation,
  FaExpandArrowsAlt
} from "react-icons/fa";
import IrishBeef from "../../../../../resources/images/irishbeef.png";
import IrishbeefImage from "../../../../../resources/images/irishbeef-image.png";

const color = "#36794f";

export default {
  name: "Irish Beef",
  logo: IrishBeef,
  color: color,
  leftgutterText:
    "Quick Service Restaurant roll up with a focus on implementing a team first culture focused on our 250+ team members across the Southwest. Our approach lead to Irish Beef becoming one of the top performing franchisees in the nation in terms of customer satisfaction and sales growth.",
  icons: [
    {
      icon: <FaMapMarkerAlt color={color} size="2em" />,
      text: "Founded 2016"
    },
    {
      icon: <FaMoneyCheckAlt color={color} size="2em" />,
      text: "Acquired Equicorp 2019"
    },
    {
      icon: <FaChartLine color={color} size="2em" />,
      text: "Highest Sales Growth"
    }
  ],
  links: [
    {
      icon: <FaUtensils color={color} size="2em" />,
      link:
        "https://www.franchising.com/articles/irish_beef_takes_over_all_tucson_arbys_locations.html"
    },
    {
      icon: <FaTools color={color} size="2em" />,
      link:
        "https://www.qsrmagazine.com/news/tucson-arby-s-continues-remodeling-program"
    },
    {
      icon: <FaSearchLocation color={color} size="2em" />,
      link:
        "https://locations.arbys.com/search.html?q=Tucson+AZ"
    },
    {
      icon: <FaExpandArrowsAlt color={color} size="2em" />,
      link:
        "https://tucson.com/business/tucson/tucson-native-to-oversee-arby-s-remodel-and-growth-locally/article_b55883e0-b1fa-50df-bcff-837a12fbf5cc.html"
    }
  ],
  rightGutterImage: IrishbeefImage
};
