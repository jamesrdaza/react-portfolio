import { useState } from "react";
import "../styles/Project.scss";
import { GrClose } from "react-icons/gr";

interface ProjectProps {
    title: string;
    description: string;
    displayURL: string;
    modalDesc: string;
}
const Project = ({ title, description, displayURL, modalDesc }: ProjectProps) => {
    const [modalIsActive, setModalIsActive] = useState(false);
    
    function flipModalIsActive() {
        setModalIsActive(!modalIsActive);
    }
    return (
    <>
            <div className="project" style={{display: modalIsActive ? "none" : "block"}} onClick={flipModalIsActive}>
                <img src={displayURL} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div 
                className="projectModal" 
                style={{display: modalIsActive ? "flex" : "none", }}
            >
                <GrClose size={22} id="CloseModal" onClick={flipModalIsActive}/>
                <img src={displayURL} alt={title} width="500px" height="300px"/>
                <p>{modalDesc}</p>
            </div>
    </>
    );
};

export default Project;
