import photo from "../images/profile.jpg";
import "../styles/styles.css";

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="card-container">
        <img src={photo} alt="Profile" className="photo"></img>
        <div className="name-description">
          <h2> Felipe Magalhães</h2>
          <p className="description"> Full-stack web developer I am a software Developer currently dealing with fullstack WEB development with a focus on Spring Framework (Back-End) and React(Front-End)</p>
        </div>
        <div className="tech-stack">
          <button> JavaScript </button>
          <button> Node </button>
          <button> React </button>
          <button> HTML + CSS </button>
          <button> Git and GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
