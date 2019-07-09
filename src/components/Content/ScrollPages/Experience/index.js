import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import IrishBeef from "../../../../resources/images/irishbeef.png";
import Mavely from "../../../../resources/images/mavely.png";
import Swyft from "../../../../resources/images/swyft.png";
import Menubar from "../../Menubar";
import mavelyContent from "./experience-data/mavely-content";
import swyftContent from "./experience-data/swyft-content";
import irishbeefContent from "./experience-data/irishbeef-content";
import "./experience.css";

export default function Experience() {
  const [showMenu, setShowMenu] = useState(true);
  const [showMavely, setShowMavely] = useState(false);
  const [showSwyft, setShowSwyft] = useState(false);
  const [showIrishBeef, setShowIrishBeef] = useState(false);
  const statesChange = {
    setShowMenu,
    setShowMavely,
    setShowSwyft,
    setShowIrishBeef
  };
  return (
    <div className="experience-container">
      <Menubar />
      {showMenu && <ExperienceMenu change={statesChange} />}
      {showMavely && (
        <ExperienceDetail
          setMenu={setShowMenu}
          setDetail={setShowMavely}
          content={mavelyContent}
        />
      )}
      {showSwyft && (
        <ExperienceDetail
          setMenu={setShowMenu}
          setDetail={setShowSwyft}
          content={swyftContent}
        />
      )}
      {showIrishBeef && (
        <ExperienceDetail
          setMenu={setShowMenu}
          setDetail={setShowIrishBeef}
          content={irishbeefContent}
        />
      )}
      <div />
    </div>
  );
}

const ExperienceMenu = ({ change }) => (
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

const ExperienceDetail = ({
  setMenu,
  setDetail,
  content
}) => (
  <div className="detail-container">
    <div className="detail-header">
      <img
        className="detail-logo"
        alt={`${content.name} logo`}
        src={content.logo}
      />
      <div
        onClick={() => {
          setMenu(true);
          setDetail(false);
        }}
        style={{ alignItems: "center", paddingRight: 30 }}
      >
        <FaWindowClose color={content.color} size="2em" />
      </div>
    </div>
    <div className="detail-body">
      <div className="body-leftgutter">
        <div className="leftgutter-text">
          {content.leftgutterText}
        </div>
        <div className="leftgutter-icons-container">
          {content.icons.map(item => {
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
            {` Explore more about ${content.name}...`}
          </div>
          <div className="learn-more-links-container">
            {content.links.map(item => {
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
          className="detail-screenshot"
          alt="mavely_screenshot"
          src={content.rightGutterImage}
        />
      </div>
    </div>
  </div>
);
