import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import './ExampleEx.css'

const ExampleEx = (props) => {

  const { item } = useParams();
  const example = props.exampleExcersises[item];
  const { title, p, img, coachingPoints } = example;

  const ref = props.goUp;

  useEffect(()=>{
    const startGoingToTopOfArticle = setTimeout(()=>{
      window.scrollTo(0, ref.current.offsetTop);
    }, 10);
    return () => clearTimeout(startGoingToTopOfArticle);
  });
  return (
    <div className="setWidth mt-4">
    <div className="container">
    <div className="row mt-3">
    <div className="col-md-8 mx-auto text-center"> <p style={{fontSize: '26px', marginBottom: '60px', fontWeight:'bold'}}>{title}</p></div>
    </div>
    <div className="row justify-content-center">

      <div className="col-4 mr-3">
       
        <p className="exampleDescription">Opis ćwiczenia:</p>
        <p className="textP">{p}</p>
        <p className="exampleDescription">Coaching points:</p>
        <p className="textP">{coachingPoints}</p>
      </div>
      <div className="col-8">
        <img style={{cursor: 'pointer'}} onClick={()=> window.open(`${img}`, "_blank")} className="img-fluid" src={img} alt="" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default ExampleEx;
