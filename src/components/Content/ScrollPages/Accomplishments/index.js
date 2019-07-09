import React from "react";
import Menubar from "../../Menubar";
import Sean from "../../../../resources/images/accomplishments-sean.png";
import Forbes from "../../../../resources/images/30-under-30-image.png";
import Eagle from "../../../../resources/images/eaglescout-image.png";
import Marketers from "../../../../resources/images/markersmatter-image.png";
import Miller from "../../../../resources/images/mltf-logo.png";
import "./accomplishments.css";

export default () => (
  <div className="accomplishments-container">
    <Menubar />
    <img
      id="accomplishments-seanimage"
      alt="sean"
      src={Sean}
    />
    <div className="accomplishments-grid">
      {accomplishmentItems.map(item => {
        return (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="accomplishments-item"
            style={
              item.margin && { marginTop: item.margin }
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
