import "./Training.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Training = (props) => {

  useWebsiteTitle("Środki treningowe");


  const goTo = props.goTo;

  useEffect(()=>{
    const startGoingToTopOfArticle = setTimeout(()=>{
      goTo();
    }, 10);
    return () => clearTimeout(startGoingToTopOfArticle);
  });

  const drills = props.exampleExcersises;

  const [excersises, setExcersises] = useState(
    Object.entries(drills).map(([item, { title, img }]) => (
      <div className="col-3 " key={title}>
        <Link className="linkDrills" to={`/${item}`}>
          <div className="drillExample">
            <img className="" alt="all" src={img}></img>
            <p className="py-3">{title}</p>
          </div>
        </Link>
      </div>
    ))
  );
  const [term, setTerm] = useState("");

  const showPasses = () => {
    setExcersises(showPassingDrills);
  };

  const shootingDrills = () => {
    setExcersises(0);
    setExcersises(showShootingDrills);
  };

  const gameDrills = () => {
    setExcersises(0);
    setExcersises(game);
  };

  const inputHandler = (e) => {
    setTerm(e.target.value);

    const newObj = Object.entries(drills)
      .filter(([drill, { title }]) =>
        title.toLowerCase().includes(term.toLowerCase())
      )
      .map(([item, { title, img }]) => (
        <div className="col-3 " key={title}>
          <Link className="linkDrills" to={`/${item}`}>
            <div className="drillExample">
              <img className="" alt="" src={img}></img>
              <p className="py-3">{title}</p>
            </div>
          </Link>
        </div>
      ));

    setExcersises(newObj);

    if (e.target.value === "") {
      setExcersises(null);
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      inputHandler(e);
    }
  };

  const showPassingDrills = Object.entries(drills)
    .filter(([drill, { category }]) => category.includes("passing"))
    .map(([item, { title, category, img }]) => (
      <div className="col-3 " key={title}>
        <Link className="linkDrills" to={`/${item}`}>
          <div className="drillExample">
            <img className="" alt="passing" src={img}></img>
            <p className="py-3">{title}</p>
          </div>
        </Link>
      </div>
    ));

  const showShootingDrills = Object.entries(drills)
    .filter(([drill, { category }]) => category.includes("shooting"))
    .map(([item, { title, category, img }]) => (
      <div className="col-3 " key={title}>
        <Link className="linkDrills" to={`/${item}`}>
          <div className="drillExample">
            <img alt="shooting" className="" src={img}></img>
            <p className="py-3">{title}</p>
          </div>
        </Link>
      </div>
    ));

  const game = Object.entries(drills)
    .filter(([drill, { category }]) => category.includes("game"))
    .map(([item, { title, category, img }]) => (
      <div className="col-3 " key={title}>
        <Link className="linkDrills" to={`/${item}`}>
          <div className="drillExample">
            <img className="" alt="games" src={img}></img>
            <p className="py-3">{title}</p>
          </div>
        </Link>
      </div>
    ));

  return (
    <>
      <div className="drillsMenu">
        <p onClick={showPasses}>Podania</p>
        <p onClick={shootingDrills}>Strzały</p>
        <p onClick={gameDrills}>Gry</p>
      </div>
      <input
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={inputHandler}
        type="text"
        style={{
          width: "200px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "30px",
        }}
      />
      <div className="trainingContainer row">{excersises}</div>
    </>
  );
};

export default Training;
