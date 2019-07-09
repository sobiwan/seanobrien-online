import React, { useState } from "react";
import Menubar from "../Menubar";
import Mavely from "../../../resources/images/mavely.png";
import Swyft from "../../../resources/images/swyft.png";
import IrishBeef from "../../../resources/images/irishbeef.png";
import "./scrollpages.css";

export default function Experience() {
  const [showMenu, setShowMenu] = useState(true);
  const [showMavely, setShowMavely] = useState(false);
  const [showSwyft, setShowSwyft] = useState(false);
  const [showIrishBeef, setShowIrishBeef] = useState(false);

  return (
    <div className="experience-container">
      <Menubar />
      {showMenu && (
        <div className="experience-company-container">
          <div
            className="logo-clickable"
            onClick={() => {
              setShowMavely(true);
              setShowMenu(false);
            }}
          >
            <img
              className="experience-logo"
              alt="mavely"
              src={Mavely}
            />
          </div>
          <div
            className="logo-clickable"
            onClick={() => {
              setShowSwyft(true);
              setShowMenu(false);
            }}
          >
            <img
              className="experience-logo"
              alt="swyft"
              src={Swyft}
            />
          </div>
          <div
            className="logo-clickable"
            onClick={() => {
              setShowIrishBeef(true);
              setShowMenu(false);
            }}
          >
            <img
              className="experience-logo"
              alt="irish_beef"
              src={IrishBeef}
            />
          </div>
        </div>
      )}
      {showMavely && (
        <div
          onClick={() => {
            setShowMavely(false);
            setShowMenu(true);
          }}
        >
          <div>Mavely</div>
          <div>close</div>
        </div>
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
