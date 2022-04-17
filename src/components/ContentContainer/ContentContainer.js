import React from "react";
import "./ContentContainer.css";
import { Outlet } from "react-router-dom";


const ContentContainer = () => {
  return (
    <div className="contentContainer">
      <Outlet />
    </div>
  );
};

export default ContentContainer;
