import "../styles/Navbar.scss";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <div id="logo">
                    {/* <img
                        src="./images/logos/logo.png"
                        alt="James Daza"
                        height={40}
                        width={40}
                    /> */}
                    <i>JAMES DAZA</i>
                </div>
                <ul>
                    <li className="nav-item">
                        <a href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">PROJECTS</a>
                    </li>
                </ul>
            </div>
            <div className="nav-right"></div>
        </nav>
    );
};

export default Navbar;
