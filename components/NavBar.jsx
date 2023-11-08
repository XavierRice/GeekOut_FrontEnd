import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fixed">
      <div className="navbar navbar-expand-lg ">
        {" "}
        {/* The bootstrap took some getting use too. Setting to "fixed-top" made the header the top/length of the page but cut out the search bar */}
        <div className="container">
          <nav>
            <span>
              <ul>
                <li>
                  <Link to="/">
                    <h5 className="nav-links">Home</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/games">
                    <h5 className="nav-links1">Games</h5>
                  </Link>
                </li>

                <li>
                  <Link to="/games/new">
                    <h5 className="nav-links">Form</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/rawg">
                    <h5 className="nav-links1">working</h5>
                  </Link>
                </li>
              </ul>
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;