import { useState } from "react";
import "../styles/Skill.scss";
import { GrClose } from "react-icons/gr";

interface SkillProps {
    name: string;
    url: string;
    modal: string;
}

const Skill = ({ name, url, modal }: SkillProps) => {
    const [modalIsActive, setModalIsActive] = useState(false);
    return (
        <div className="skill" >
            <img src={url} alt={name} height="60px" width="50px" />
            <h3>{name}</h3>
        </div>
    );
};

export default Skill;
