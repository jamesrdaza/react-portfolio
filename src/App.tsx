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
                    <span className="anchor" id="landingSkills"></span>
                    <h1 id="skills">Skills</h1>
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
                            name="CSS"
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
                            name="Git"
                            url="./images/logos/git.png"
                            modal=""
                        />
                        <Skill
                            name="Vim"
                            url="./images/logos/vim.png"
                            modal=""
                        />
                        <Skill
                            name="React"
                            url="./images/logos/react.png"
                            modal=""
                        />
                        <Skill
                            name="Svelte"
                            url="./images/logos/svelte.png"
                            modal=""
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="content">
                    <h1 id="projects">Projects</h1>
                    <div className="projectContainer">
                        <Project title="Bullet Journal" description="Bullet Journal Web App" displayURL="./images/projects/BuJo.png" 
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
