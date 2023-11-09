import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="frame-parent">
      <div className="frame-wrapper">
        <div className="geekout-games-wrapper">
          <div className="geekout-games">
            <p className="geekout">
              <span>
                <span className="geek">GeeK</span>
                <span className="out">Out</span>
                <span>:</span>
              </span>
            </p>
            <p className="games">
              <span>
                <span>👾Games</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="home-parent">
      <Link to="/">
        <h3 className="home">Home</h3>
        </Link>
        <Link to="/games">
        <h3 className="home">Games</h3>
        </Link>
        <Link to="/games/new">
        <h3 className="home">{`NEW ! `}</h3>
        </Link>
        <h3 className="home">{`About `}</h3>
      </div>
    </div>
  );
};

export default Header;
