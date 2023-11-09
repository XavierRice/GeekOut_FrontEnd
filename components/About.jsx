import { Link } from "react-router-dom";

const About = () => {

    const backgroundImageStyle = {
        backgroundImage: `url('src/assets/GameOver.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const borderStyle = {
        border: "5px solid #000",
        borderStyle: "groove",
        padding: "25px",
        margin: "25px"
    };


    return (
        <div style={backgroundImageStyle}>
            <div className="about" style={borderStyle}>
                <h2>Xavier Rice</h2>
                <p>Hello! 🖖🏾 I'm X! A Pursuit Fellow, currently mastering the art of crafting advanced web applications using React, JavaScript (ES6), HTML5, CSS3, Express, PostgreSQL, APIs, and Git 🚀. My commitment to learning is unwavering, stemming from my background as a creative storyteller who excels in creating connections and sharing impactful narratives 🗣️🎭.
                </p>
                <Link to='https://github.com/Xavierrice/'>
                    <h4>Xavier Rice's Github</h4>
                </Link>
            </div>
            <div className="about" style={borderStyle}>
                <h2>Gaspare Carollo</h2>
                <p>Currently a Pursuit fellow pursuing a career in the tech industry as a fullstack software developer. Influenced with a creative background in video production, graphic design, and writing, Gaspare is always inspired to explore and reimagine his creativity in various artforms.</p>
                <Link to='https://github.com/Gasparecarollo/'>
                    <h4>Gaspare Carollo's Github</h4>
                </Link>
            </div>
        </div >
    )

}

export default About;