import React from "react";
import ReactGA from "react-ga";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMedal
} from "react-icons/fa";
import "./profile.css";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview("/Profile");
  }

  render() {
    return (
      <div className="home-left-sticky">
        <div className="left-sticky-content-container">
          <div className="left-sticky-title">
            Sean O'Brien
          </div>
          <div className="left-sticky-social-container">
            {social.map(s => {
              return (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {s.icon}
                </a>
              );
            })}
          </div>
          <div className="left-sticky-blurb-container">
            <div className="blurb-text">
              Currently solving brand customer acquisition
              issues{" "}
              <a
                href={mavelyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @Mavely
              </a>
              . Formerly co-created the world's first emoji
              ad network{" "}
              <a
                href={swyftUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @Swyft
              </a>{" "}
              and took a culure first approach to resturant
              roll ups{" "}
              <a
                href={irishbeefURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                @IrishBeef
              </a>
              . Follow my work, interests and
              accomplishments here on my page!
            </div>
          </div>

          <div className="left-sticky-cta-continaer">
            <div className="left-sticky-cta-button">
              Say Hello!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const social = [
  {
    icon: <FaLinkedin color="#a7a7a7" size="3em" />,
    link: "https://www.linkedin.com/in/seanmichaelobrien/"
  },
  {
    icon: <FaInstagram color="#a7a7a7" size="3em" />,
    link: "https://www.instagram.com/ramensean/"
  },
  {
    icon: <FaGithub color="#a7a7a7" size="3em" />,
    link: "https://github.com/sobiwan"
  },
  {
    icon: <FaMedal color="#a7a7a7" size="3em" />,
    link:
      "https://www.forbes.com/profile/swyft-media/#298e1dd86f38"
  }
];

const mavelyUrl = "https://mavely.life";
const swyftUrl =
  "https://www.forbes.com/sites/parmyolson/2015/02/03/super-bowl-stickers-future-mobile-advertising/#6c480c445443";
const irishbeefURL =
  "https://www.qsrmagazine.com/news/dallas-based-irish-beef-buys-8-tucson-area-arbys-units";
