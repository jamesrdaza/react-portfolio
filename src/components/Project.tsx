import Navbar from "./Navbar";
import "../styles/Project.scss";

interface ProjectProps {
    title: string;
    description: string;
    displayURL: string;
}
const Project = ({ title, description, displayURL }: ProjectProps) => {
    return (
        <div className="pageContainer">
            <Navbar /> 
            <div className="project">
                <img src={displayURL} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;
