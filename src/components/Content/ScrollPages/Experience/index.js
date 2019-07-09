import React, { useState } from "react";
import Menubar from "../../Menubar";
import {
  FaWindowClose,
  FaMapMarkerAlt,
  FaBuilding,
  FaHome,
  FaMobileAlt,
  FaDonate,
  FaShoppingBasket,
  FaFacebook,
  FaGraduationCap
} from "react-icons/fa";
import Mavely from "../../../../resources/images/mavely.png";
import MavelyIphone from "../../../../resources/images/mavely_screenshot.png";
import Swyft from "../../../../resources/images/swyft.png";
import IrishBeef from "../../../../resources/images/irishbeef.png";
import "./experience.css";

export default function Experience() {
  const [showMenu, setShowMenu] = useState(true);
  const [showMavely, setShowMavely] = useState(false);
  const [showSwyft, setShowSwyft] = useState(false);
  const [showIrishBeef, setShowIrishBeef] = useState(false);
  const states = { showMavely, showSwyft, showIrishBeef };
  const statesChange = {
    setShowMenu,
    setShowMavely,
    setShowSwyft,
    setShowIrishBeef
  };
  return (
    <div className="experience-container">
      <Menubar />
      {showMenu && (
        <ExperienceMenu
          states={states}
          change={statesChange}
        />
      )}
      {showMavely && (
        <MavelyView states={states} change={statesChange} />
      )}
      {showSwyft && (
        <div
          onClick={() => {
            setShowSwyft(false);
            setShowMenu(true);
          }}
        >
          <div>Swyft</div>
          <div>close</div>
        </div>
      )}
      {showIrishBeef && (
        <div>
          <div>IrishBeef</div>
          <div
            onClick={() => {
              setShowIrishBeef(false);
              setShowMenu(true);
            }}
          >
            close
          </div>
        </div>
      )}
      <div />
    </div>
  );
}

const ExperienceMenu = ({ states, change }) => (
  <div className="experience-company-container">
    <div
      className="logo-clickable"
      onClick={() => {
        change.setShowMavely(true);
        change.setShowMenu(false);
      }}
    >
      <img
        className="menu-logo"
        alt="mavely"
        src={Mavely}
      />
    </div>
    <div
      className="logo-clickable"
      onClick={() => {
        change.setShowSwyft(true);
        change.setShowMenu(false);
      }}
    >
      <img className="menu-logo" alt="swyft" src={Swyft} />
    </div>
    <div
      className="logo-clickable"
      onClick={() => {
        change.setShowIrishBeef(true);
        change.setShowMenu(false);
      }}
    >
      <img
        className="menu-logo"
        alt="irish_beef"
        src={IrishBeef}
      />
    </div>
  </div>
);

const MavelyView = ({ states, change }) => (
  <div className="mavelyview-container">
    <div className="mavelyview-header">
      <img
        className="mavelyview-logo"
        alt="mavely"
        src={Mavely}
      />
      <div
        onClick={() => {
          change.setShowMavely(false);
          change.setShowMenu(true);
        }}
        style={{ alignItems: "center", paddingRight: 30 }}
      >
        <FaWindowClose color="#ea1852" size="2em" />
      </div>
    </div>
    <div className="mavelyview-body">
      <div className="body-leftgutter">
        <div className="leftgutter-text">
          Solving the issue of rising customer acquisition
          costs for brands while driving consumer product
          discover and additional income for everyday
          families.
        </div>
        <div className="leftgutter-icons-container">
          {MavelyIcons.map(item => {
            return (
              <div className="icons-item">
                <div>{item.icon}</div>
                <div className="leftgutter-icons-text">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
        <div className="leftgutter-learn-more-container">
          <div className="learn-more-title">
            Explore more about Mavely...
          </div>
          <div className="learn-more-links-container">
            {MavelyLinks.map(item => {
              return (
                <a
                  className="icons-item"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{item.icon}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="body-rightgutter-image">
        <img
          className="mavelyview-screenshot"
          alt="mavely_screenshot"
          src={MavelyIphone}
        />
      </div>
    </div>
  </div>
);

const MavelyIcons = [
  {
    icon: <FaMapMarkerAlt color="#ea1852" size="2em" />,
    text: "Founded June 2018"
  },
  {
    icon: <FaBuilding color="#ea1852" size="2em" />,
    text: "Offices in Chicago, IL"
  },
  // {
  //   icon: <FaDonate color="#ea1852" size="2em" />,
  //   text: "Funded by Pivot North"
  // },
  {
    icon: <FaShoppingBasket color="#ea1852" size="2em" />,
    text: "Shopping Re-Defined"
  }
];

const MavelyLinks = [
  {
    icon: <FaHome color="#ea1852" size="2em" />,
    link: "https://mavely.life"
  },
  {
    icon: <FaMobileAlt color="#ea1852" size="2em" />,
    link: "https://mavely.life/download"
  },
  {
    icon: <FaFacebook color="#ea1852" size="2em" />,
    link: "https://www.facebook.com/MavelyApp/"
  },
  {
    icon: <FaGraduationCap color="#ea1852" size="2em" />,
    link: "https://learn.mavely.life/"
  }
];
