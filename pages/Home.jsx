import { useState } from "react";
import Header from "../components/Header";


import "./Home.css"

export default function Home() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScreenClick = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className="Home1" onClick={handleScreenClick}>
      {showNavBar && <Header />} {/* Render the NavBar component when showNavBar is true */}
    </div>
  );
}