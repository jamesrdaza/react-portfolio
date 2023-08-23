import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import { FaAngleDown } from "react-icons/fa";
import "./styles/App.scss";

function App() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="hero-bg">
                <img
                    src="./images/logos/jamesdaza.png"
                    alt="James Daza"
                    className="icon"
                    height={350}
                    width={350}
                />
                <i>
                    <p
                        style={{
                            fontFamily: "Jetbrains Mono",
                            fontSize: "20px",
                        }}
                    >
                        Software Engineering &#x2022; Programming &#x2022;
                        Problem-Solving
                    </p>
                </i>
                <div className="down-container">
                    <FaAngleDown className="down" size={50} color="white" />
                </div>
            </div>
            <section>
                <div className="halfContent">
                    <h1>About Me</h1>
                    <p style={{ lineHeight: "2rem" }}>
                        Hi! and Welcome to my portfolio! I'm James Daza an
                        aspiring Software Engineer, student,
                        programming-enthusiast. I have various interests in
                        fields such as, web development and
                        blockchain-techonology. I'm driven and I am driven and
                        passionate about computer science. I continuously expand
                        my skill set and learn new technologies. In my spare
                        time, I like to self-study. I also work efficiently and
                        communicate effectively with others and thrive within a
                        team environment. An interesting fact about me is that I
                        enjoy competing in amateur esports leagues playing
                        Counter-Strike: Global Offensive in a UCSD club that
                        faces other Universities. I attribute some of my team
                        skills to my experience competing in traditional high
                        school sports as well as esports in my free time.
                    </p>
                </div>
                <div
                    className="halfContent"
                    style={{ gridColumn: "7 / span 5" }}
                >
                    <img src="./svgs/hello.svg" alt="Hello" />
                </div>
            </section>
            <section>
                <div className="content">
                    <h1>Skills</h1>
                    <div className="skillContainer">
                        <Skill
                            name="Typescript"
                            url="./images/logos/typescript.png"
                            modal="Typescript is my preference over using javascript for type safety"
                        />
                        <Skill
                            name="Javascript"
                            url="./images/logos/javascript.png"
                            modal="I have utilized javascript to access the DOM as well as make API Calls on both clients and servers"
                        />
                        <Skill
                            name="S/CSS"
                            url="./images/logos/css3.png"
                            modal=""
                        />
                        <Skill
                            name="HTML"
                            url="./images/logos/html5.png"
                            modal="I have used HTML5 for various web page formatting for both SPA"
                        />
                        <Skill
                            name="C/C++"
                            url="./images/logos/c.png"
                            modal="C/C++ was used for projects requiring low-level memory access as well as system calls"
                        />
                        <Skill
                            name="Java"
                            url="./images/logos/java.png"
                            modal=""
                        />
                        <Skill
                            name="Python"
                            url="./images/logos/python.png"
                            modal=""
                        />
                        <Skill
                            name="Solidity"
                            url="./images/logos/solidity.png"
                            modal="Solidity was used to implement the ERC-721 Token standard."
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="content">
                    <h1>Projects</h1>
                    <div className="projectContainer">
                        <div className="project"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
