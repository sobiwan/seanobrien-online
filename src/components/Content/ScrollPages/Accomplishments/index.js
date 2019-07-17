import React from "react";
import { isMobile } from "react-device-detect";
import Bounce from "react-reveal/Bounce";
import Sean from "../../../../resources/images/accomplishments-sean.png";
import Forbes from "../../../../resources/images/30-under-30-image.png";
import Eagle from "../../../../resources/images/eaglescout-image.png";
import Marketers from "../../../../resources/images/markersmatter-image.png";
import Miller from "../../../../resources/images/mltf-logo.png";
import "./accomplishments.css";

export default ({ breakPoint }) => (
  <div
    className={
      breakPoint
        ? "accomplishments-container break-ac"
        : "accomplishments-container full-ac"
    }
  >
    <div className="header-accomp">
      Honors & Recognitions
    </div>

    {!isMobile && (
      <img
        id="accomplishments-seanimage"
        alt="sean"
        src={Sean}
      />
    )}

    <div
      className={
        isMobile
          ? "accomplishments-grid mobile-ag"
          : "accomplishments-grid"
      }
    >
      {accomplishmentItems.map(item => {
        return (
          <Bounce bottom>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isMobile
                  ? "accomplishments-item mobile-ai"
                  : "accomplishments-item"
              }
              style={
                item.margin &&
                !isMobile && { marginTop: item.margin }
              }
            >
              <div
                className="accomplishments-image"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
              <div>{item.text}</div>
            </a>
          </Bounce>
        );
      })}
    </div>
  </div>
);

const accomplishmentItems = [
  {
    margin: 70,
    image: Eagle,
    text: "Eagle Scout",
    link: "https://www.troop719.org/front_page"
  },
  {
    image: Forbes,
    text: "Forbes 30 under 30",
    link:
      "https://www.forbes.com/profile/swyft-media/#298e1dd86f38"
  },
  {
    image: Miller,
    text: "Miller Tap the Future: Winner & Judge",
    link:
      "https://www.millercoorsblog.com/news/how-two-friends-used-emojis-win-250k"
  },
  {
    margin: 70,
    image: Marketers,
    text: "Marketers that Matter Finalist",
    link: "https://www.marketersthatmatter.com/"
  }
];
