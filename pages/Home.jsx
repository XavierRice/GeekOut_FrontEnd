import { useState } from "react";
import Header from "../components/Header";
import portalImage from '../src/assets/Portal.jpg'

import "./Home.css"

export default function Home() {

  const divStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: `url(${portalImage}) no-repeat center center/cover`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };



  const [showNavBar, setShowNavBar] = useState(false);

  const handleScreenClick = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className={divStyle} onClick={handleScreenClick}>
      {showNavBar && <Header />} {/* Render the NavBar component when showNavBar is true */}
    </div>
  );
}