import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import WhyUs from "../Main/WhyUs/WhyUs"
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Main = (props) => {
  

  const goTo = props.goTo;

  useEffect(()=>{
    const startGoingToTopOfArticle = setTimeout(()=>{
      goTo();
    }, 10);
    return () => clearTimeout(startGoingToTopOfArticle);
  });
  
  useWebsiteTitle('Strona główna');

  const exampleExcersises = props.exampleExcersises;
  


  const showRandomExcersises =  Object.entries(exampleExcersises).map(([item, { title, img }]) => (
    <Link key={title} to={`/${item}`}>
    <div className="singleExample rounded mx-1 card">

      <img className="card-img-top " src={img} alt="excersise"></img>
      <div className="card-body">
        <p className="exampleP" key={item}>{title}</p>
      </div>
    </div>
    </Link>
  )).sort(() => 0.5 - Math.random());
  
  const randomExcersises = showRandomExcersises.slice(0,4);

 
  return (
    <>
       <WebsiteLogo></WebsiteLogo>
       <WhyUs></WhyUs>
       <hr style={{width:'80%', margin: "0 auto"}}></hr>
      <h3 className=" h3Example my-3 pt-4 ">Przykładowe ćwiczenia:</h3>
      <div className="example d-flex justify-content-between py-4">
        {randomExcersises}
      </div>
      
   
    </>
  );
};

export default Main;
