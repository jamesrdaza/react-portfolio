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
                            textAlign: "center",
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
                        Welcome to my portfolio! I'm James Daza, an aspiring
                        Software Engineer and recent Computer Science graduate.
                        With a B.S. degree earned in December 2023, I'm deeply
                        passionate about computer science and problem-solving.
                        My interests span various areas, including web
                        development and blockchain technology. I enjoy working
                        on both frontend and backend. I am constantly seeking to
                        expand my skill set and delve into new languages,
                        libraries, and frameworks. A lot of my learning occurs
                        in my spare time, where I actively study and research to
                        stay in touch with the latest developments. Currently,
                        I'm diving into the world of Rust to further my
                        skillset.
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
                        <Skill name="CSS" url="./images/logos/css3.png" />
                        <Skill name="HTML" url="./images/logos/html5.png" />
                        <Skill name="C/C++" url="./images/logos/c.png" />
                        <Skill name="Java" url="./images/logos/java.png" />
                        <Skill name="Python" url="./images/logos/python.png" />
                        <Skill name="Git" url="./images/logos/git.png" />
                        <Skill name="Vim" url="./images/logos/vim.png" />
                        <Skill name="React" url="./images/logos/react.png" />
                        <Skill name="Svelte" url="./images/logos/svelte.png" />
                    </div>
                </div>
            </section>
            <section>
                <div className="content">
                    <span className="anchor" id="landingProjects"></span>
                    <h1 id="projects">Projects</h1>
                    <div className="projectContainer">
                        <Project
                            title="Bullet Journal"
                            displayURL="./images/projects/BuJo.png"
                            modalDesc="I collaborated with a team of ten students to develop an online Bullet Journal, 
                            employing agile methodologies throughout the project. We structured our work into three distinct 
                            sprints, conducting daily stand-ups, weekly team meetings, and retrospectives to assess our progress 
                            and efficiency. Our development process involved three main groups: designers who crafted both 
                            low-fidelity and high-fidelity UI designs, front-end developers responsible for implementing 
                            website elements, and back-end developers, including myself, tasked with data storage and 
                            retrieval solutions. In my role on the back-end team, I focused on devising strategies for 
                            data storage and querying. We utilized indexedDB for local storage of user data, seamlessly 
                            integrating our functions with the front-end team's work. As the project progressed, I 
                            transitioned to a testing role, implementing Jest scripts to ensure the reliability of our 
                            indexedDB database. Successful completion of these tests was a prerequisite for merging pull 
                            requests into our main Git branch."
                            link="https://cse110-sp21-group19.github.io/cse110-sp21-group19/"
                            github="https://github.com/cse110-sp21-group19/cse110-sp21-group19"
                        />
                        <Project
                            title="Fotodumper"
                            displayURL="./images/projects/Fotodumper.png"
                            modalDesc="I am currently developing a website that allows users to upload images to their user profiles. 
                            The user interface is being crafted by me using Svelte. On the backend, I'm utilizing a Postgres database to store 
                            user information. This database stores a link to an AWS S3 bucket housing the images, alongside user authentication 
                            information provided through Google's authentication API."
                            link="https://github.com/jamesrdaza/fotodumper"
                            github="https://github.com/jamesrdaza/fotodumper-api"
                        />
                        <Project
                            title="Smart Contract Monitor"
                            displayURL="./images/projects/EthSmrt.png"
                            modalDesc="I created a react app that monitors a smart contract on the Ethereum blockchain. It uses the Etherscan API and 
                            Alchemy API to get contract data and monitor unconfirmed transactions on the blockchain. It then sends out an transaction 
                            that the user and calls a function that the user desires."
                            link="https://github.com/jamesrdaza/Ethereum-Smart-Contract-Monitor"
                            github="https://github.com/jamesrdaza/Ethereum-Smart-Contract-Monitor"
                        />
                        <Project
                            title="Vois"
                            displayURL="./images/projects/Vois.png"
                            modalDesc="I developed a proof of concept Social Media Dapp featuring user authentication. Users can authenticate by signing a message with their wallet, establishing their identity. Subsequently, the system creates a user profile stored in a Postgres database. Management of the database was facilitated by Prisma ORM, enabling schema creation and seamless data handling through its provided functions."
                            link="https://github.com/jamesrdaza/Vois"
                            github="https://github.com/jamesrdaza/Vois"
                        />
                    </div>
                </div>
            </section>
            <footer></footer>
        </div>
    );
}

export default App;
