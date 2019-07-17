import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import IrishBeef from "../../../../resources/images/irishbeef.png";
import Mavely from "../../../../resources/images/mavely.png";
import Swyft from "../../../../resources/images/swyft.png";
import mavelyContent from "./experience-data/mavely-content";
import swyftContent from "./experience-data/swyft-content";
import irishbeefContent from "./experience-data/irishbeef-content";
import "./experience.css";

export default function Experience(props) {
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
    <div
      style={props.breakPoint ? { height: "100%" } : null}
      className={"experience-container"}
    >
      <div />
      {showMenu && (
        <ExperienceMenu
          showMenu={showMenu}
          change={statesChange}
          breakPoint={props.breakPoint}
        />
      )}
      {showMavely && (
        <ExperienceDetail
          setMenu={setShowMenu}
          setDetail={setShowMavely}
          content={mavelyContent}
          breakPoint={props.breakPoint}
        />
      )}
      {showSwyft && (
        <ExperienceDetail
          setMenu={setShowMenu}
          setDetail={setShowSwyft}
          content={swyftContent}
          breakPoint={props.breakPoint}
        />
      )}
      {showIrishBeef && (
        <ExperienceDetail
          setMenu={setShowMenu}
          setDetail={setShowIrishBeef}
          content={irishbeefContent}
          breakPoint={props.breakPoint}
        />
      )}
      <div className="experience-footer">
        {showMenu && "click into the logos for more detail"}
      </div>
    </div>
  );
}

const ExperienceMenu = ({
  breakPoint,
  change,
  showMenu
}) => (
  <div
    className={
      breakPoint
        ? "experience-company-container break-ecc"
        : "experience-company-container full-ecc"
    }
  >
    <Flip top cascade>
      <div
        className="logo-clickable"
        onClick={() => {
          change.setShowMenu(false);
          change.setShowMavely(true);
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
        <img
          className="menu-logo"
          alt="swyft"
          src={Swyft}
        />
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
    </Flip>
  </div>
);

const ExperienceDetail = ({
  setMenu,
  setDetail,
  content,
  breakPoint
}) => (
  <div className="detail-container">
    <div className="detail-header">
      <LightSpeed left>
        <img
          className="detail-logo"
          alt={`${content.name} logo`}
          src={content.logo}
        />
      </LightSpeed>
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
    <div
      className={
        breakPoint
          ? "detail-body break-db"
          : "detail-body full-db"
      }
    >
      <div
        className={
          breakPoint
            ? "body-leftgutter break-bl"
            : "body-leftgutter full-bl"
        }
      >
        <Fade left>
          <div className="leftgutter-text">
            {content.leftgutterText}
          </div>
        </Fade>
        <div className="leftgutter-icons-container">
          {content.icons.map(item => {
            return (
              <Zoom top>
                <div className="icons-item">
                  <div>{item.icon}</div>
                  <div className="leftgutter-icons-text">
                    {item.text}
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
        <div className="leftgutter-learn-more-container">
          <Fade left>
            <div className="learn-more-title">
              {`Explore more about ${content.name}...`}
            </div>
          </Fade>
          <div className="learn-more-links-container">
            {content.links.map(item => {
              return (
                <Zoom top>
                  <a
                    className="icons-item"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>{item.icon}</div>
                  </a>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
      {!breakPoint && (
        <Flip right>
          <div
            className="detail-screenshot"
            alt="mavely_screenshot"
            style={{
              backgroundImage: `url(${content.rightGutterImage})`
            }}
          />
        </Flip>
      )}
    </div>
  </div>
);
