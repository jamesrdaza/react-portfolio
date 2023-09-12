import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { FaAngleDown } from "react-icons/fa";
import "./styles/App.scss";

function App() {
    return (
        <div className="page-container" id="home">
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
                            textAlign: "center"
                        }}
                    >
                        Software Engineering &#x2022; Programming &#x2022;
                        Problem-Solving
                    </p>
                </i>
                <a href="#landingAbout">
                    <div className="down-container">
                        <FaAngleDown className="down" size={50} color="white" />
                    </div>
                </a>
            </div>
            <section>
                <div className="halfContent">
                    <span className="anchor" id="landingAbout"></span>
                    <h1 id="about">About Me</h1>
                    <p style={{ lineHeight: "2rem" }}>
                        Hi! and Welcome to my personal website and portfolio! 
                        I'm James Daza an aspiring
                        Software Engineer, student,
                        and programming-enthusiast. I'm driven and 
                        passionate about computer science and problem-sovling.
                        One of my interests include
                        web development. I have interests in both frontend and backend 
                        technologies.
                        I strive to continuously expand
                        my skill set and learn various things from languages, to libraries, to frameworks. 
                        A lot of this learning is in my spare time, I study and research to keep up with what's new and emerging,
                        especially in web development.
                        One of my current undertakings is that I am in the process of learning Rust.
                    </p>
                </div>
                <div
                    className="halfContent"
                    style={{ 
                        gridColumn: "7 / span 5",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img src="./svgs/hello.svg" alt="Hello" />
                </div>
            </section>
            <section>
                <div className="content">
                    <span className="anchor" id="landingSkills"></span>
                    <h1 id="skills">Skills</h1>
                    <div className="skillContainer">
                        <Skill
                            name="Typescript"
                            url="./images/logos/typescript.png"
                        />
                        <Skill
                            name="Javascript"
                            url="./images/logos/javascript.png"
                        />
                        <Skill
                            name="CSS"
                            url="./images/logos/css3.png"
                        />
                        <Skill
                            name="HTML"
                            url="./images/logos/html5.png"
                        />
                        <Skill
                            name="C/C++"
                            url="./images/logos/c.png"
                        />
                        <Skill
                            name="Java"
                            url="./images/logos/java.png"
                        />
                        <Skill
                            name="Python"
                            url="./images/logos/python.png"
                        />
                        <Skill
                            name="Git"
                            url="./images/logos/git.png"
                        />
                        <Skill
                            name="Vim"
                            url="./images/logos/vim.png"
                        />
                        <Skill
                            name="React"
                            url="./images/logos/react.png"
                        />
                        <Skill
                            name="Svelte"
                            url="./images/logos/svelte.png"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="content">
                    <span className="anchor" id="landingProjects"></span>
                    <h1 id="projects">Projects</h1>
                    <div className="projectContainer">
                        <Project title="Bullet Journal" displayURL="./images/projects/BuJo.png" 
                            modalDesc="I worked in a team with ten other students to create an online Bullet Journal while utilizing the agile process. We had three distinct sprints for our team and did daily standups, weekly team meetings, and retrospectives to gauge our efficacy during development. We had three main groups during development. We had designers who created lo-fi and hi-fi designs of the UI, front-end who created the elements of the website, and back-end, where I was, that would figure out how to store and query. We used indexedDB to store user data in local storage and passed our functions to the front-end team. After the initial setup, I transitioned into a more testing role setting up jest scripts to test our indexedDB database. Passing the test script was required for pull requests into our main git branch."     
                        />
                    </div>
                </div>
            </section>
            <footer></footer>
        </div>
    );
}

export default App;
