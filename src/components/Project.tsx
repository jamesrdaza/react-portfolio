import { useState } from "react";
import "../styles/Project.scss";
import { GrClose } from "react-icons/gr";

interface ProjectProps {
    title: string;
    displayURL: string;
    modalDesc: string;
}
const Project = ({ title, displayURL, modalDesc }: ProjectProps) => {
    const [modalIsActive, setModalIsActive] = useState(false);
    
    function flipModalIsActive() {
        setModalIsActive(!modalIsActive);
    }
    return (
    <>
            <div className="project" style={{display: modalIsActive ? "none" : "block"}} onClick={flipModalIsActive}>
                <img src={displayURL} alt={title} />
                <h3>{title}</h3>
            </div>
            <div 
                className="projectModal" 
                style={{display: modalIsActive ? "flex" : "none", }}
            >
                <GrClose size={22} id="CloseModal" onClick={flipModalIsActive}/>
                <img src={displayURL} alt={title} />
                <p>{modalDesc}</p>
            </div>
    </>
    );
};

export default Project;
