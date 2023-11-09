import FourOImg from "../src/assets/404games.jpg"

export default function FourOFour() {

    const divStyle2 = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: `url(${FourOImg}) no-repeat center center/cover`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  

    return (
      <div className={divStyle2}>
        <h1>Sorry, no page found</h1>
      </div>
    );
  }
  