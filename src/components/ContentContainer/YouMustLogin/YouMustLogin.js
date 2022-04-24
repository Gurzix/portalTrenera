import React, {useEffect} from "react";
import "./YouMustLogin.css";
import { useNavigate } from "react-router-dom";
import img from "../YouMustLogin/img/login.webp";


const YouMustLogin = (props) => {
  const history = useNavigate();
  const goTo = props.goTo;
  
  useEffect(()=>{
    const startGoingToTopOfArticle = setTimeout(()=>{
      goTo();
    }, 10);
    return () => clearTimeout(startGoingToTopOfArticle);
  });
  const goToLoginPageHandler = () => {
    history("/login");
  };
  return (
    <>
      <div className="container">
        <div className="col-md-10 col-xs-6  mx-auto text-center">
         <div className="imageContainerYML mt-2">
          <img className="" alt="cristiano shows you what to do" src={img} />
         </div>
          <p className="mt-4 goToLoginPageP" onClick={goToLoginPageHandler}>
            Musisz być zalogowany żeby przeglądać zawartość tej strony
          </p>
        </div>
      </div>
    </>
  );
};
export default YouMustLogin;
