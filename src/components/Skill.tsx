import "../styles/Skill.scss";

interface SkillProps {
    name: string;
    url: string;
}

const Skill = ({name, url}: SkillProps) => {
    return (
        <div className="skill" >
            <img src={url} alt={name} height="60px" width="50px" />
            <h3>{name}</h3>
        </div>
    );
};

export default Skill;
