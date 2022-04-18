import React from "react";
import "./YouMustLogin.css";
import { useNavigate } from "react-router-dom";
import img from "../YouMustLogin/img/login.webp";

const YouMustLogin = () => {
  const history = useNavigate();

  const goToLoginPageHandler = () => {
    history("/login");
  };
  return (
    <>
      <div className="container">
        <div className="col-md-12  mx-auto text-center">
         <div className="imageContainerYML">
          <img className="mt-2" src={img} />
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
