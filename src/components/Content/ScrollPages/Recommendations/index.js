import React from "react";
import "./recommendations.css";

export default () => (
  <div className="recommendations-container">
    <div />
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

const SeanFaves = {
  wine: [
    {
      category: "Wine",
      name: "Vina Ardanza Reserva 2017 - La Rioja Alta",
      link:
        "https://www.vivino.com/la-rioja-alta-vina-ardanza-reserva/w/7973?year=2017"
    },
    {
      category: "Wine",
      name: "Vina Ardanza Reserva 2017 - La Rioja Alta",
      link:
        "https://www.vivino.com/la-rioja-alta-vina-ardanza-reserva/w/7973?year=2017"
    },
    {
      category: "Wine",
      name: "Vina Ardanza Reserva 2017 - La Rioja Alta",
      link:
        "https://www.vivino.com/la-rioja-alta-vina-ardanza-reserva/w/7973?year=2017"
    },
    {
      category: "Wine",
      name: "Vina Ardanza Reserva 2017 - La Rioja Alta",
      link:
        "https://www.vivino.com/la-rioja-alta-vina-ardanza-reserva/w/7973?year=2017"
    }
  ],
  music: [
    {
      category: "Music",
      name: "Windows 95 on Acid - Spencer Brown",
      link:
        "https://soundcloud.com/spencerbrownofficial/windows-95-on-acid-mau5trap-clip"
    },
    {
      category: "Music",
      name: "Windows 95 on Acid - Spencer Brown",
      link:
        "https://soundcloud.com/spencerbrownofficial/windows-95-on-acid-mau5trap-clip"
    },
    {
      category: "Music",
      name: "Windows 95 on Acid - Spencer Brown",
      link:
        "https://soundcloud.com/spencerbrownofficial/windows-95-on-acid-mau5trap-clip"
    },
    {
      category: "Music",
      name: "Windows 95 on Acid - Spencer Brown",
      link:
        "https://soundcloud.com/spencerbrownofficial/windows-95-on-acid-mau5trap-clip"
    }
  ],
  recipes: [
    {
      category: "Recipes",
      name: "Eleven-Layer Potato",
      link:
        "https://www.foodnetwork.com/recipes/bobby-flay/eleven-layer-potato-gratin-3160636"
    },
    {
      category: "Recipes",
      name: "Eleven-Layer Potato",
      link:
        "https://www.foodnetwork.com/recipes/bobby-flay/eleven-layer-potato-gratin-3160636"
    },
    {
      category: "Recipes",
      name: "Eleven-Layer Potato",
      link:
        "https://www.foodnetwork.com/recipes/bobby-flay/eleven-layer-potato-gratin-3160636"
    },
    {
      category: "Recipes",
      name: "Eleven-Layer Potato",
      link:
        "https://www.foodnetwork.com/recipes/bobby-flay/eleven-layer-potato-gratin-3160636"
    }
  ],
  restaurants: [
    {
      category: "Restaurants",
      name: "Mott St - Chicago IL",
      link: "https://www.mottstreetchicago.com/"
    },
    {
      category: "Restaurants",
      name: "Mott St - Chicago IL",
      link: "https://www.mottstreetchicago.com/"
    },
    {
      category: "Restaurants",
      name: "Mott St - Chicago IL",
      link: "https://www.mottstreetchicago.com/"
    },
    {
      category: "Restaurants",
      name: "Mott St - Chicago IL",
      link: "https://www.mottstreetchicago.com/"
    }
  ]
};
