import photo from "../images/tobi.jpg";
import "../styles/styles.css";
import Skill from "./Skill";

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="card-container">
        <img src={photo} alt="Profile" className="photo"></img>
        <div className="name-description">
          <h2> Felipe Magalhães</h2>
          <p className="description">
            Full-stack web developer I am a software Developer currently dealing
            with fullstack WEB development with a focus on Spring Framework
            (Back-End) and React(Front-End)
          </p>
        </div>
        <div className="skill-container">
          <Skill skillName="JavaScript" sColor="yellow" emoji="🤘"/>
          <Skill skillName="Node" sColor="pink" emoji="📈"/>
          <Skill skillName="React" sColor="bluelight" emoji="⚛️"/>
          <Skill skillName="HTML + CSS" sColor="purple" emoji="😎" />
          <Skill skillName="Git and GitHub" sColor="red" emoji="🤑"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
