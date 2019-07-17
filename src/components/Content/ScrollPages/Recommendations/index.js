import React from "react";
import SeanFaves from "./recomendations-data";
import "./recommendations.css";

export default () => (
  <div className="recommendations-container">
    <div className="header-rec">Some Recommendations</div>
    <div className="recs-content-container">
      <div className="recs-header">
        These are few of my favorite things ...
      </div>
      <div className="content-grid">
        <div className="grid-item">
          <div className="rec-title"> Wine </div>
          {SeanFaves.wine.map(item => {
            return (
              <GridItem link={item.link} name={item.name} />
            );
          })}
        </div>
        <div className="grid-item">
          <div className="rec-title"> Music </div>
          {SeanFaves.music.map(item => {
            return (
              <GridItem link={item.link} name={item.name} />
            );
          })}
        </div>
        <div className="grid-item">
          <div className="rec-title"> Recipes </div>
          {SeanFaves.recipes.map(item => {
            return (
              <GridItem link={item.link} name={item.name} />
            );
          })}
        </div>
        <div className="grid-item">
          <div className="rec-title"> Restaurants </div>
          {SeanFaves.restaurants.map(item => {
            return (
              <GridItem link={item.link} name={item.name} />
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const GridItem = ({ link, name }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="item-name"
  >
    <div>{name}</div>
  </a>
);
