function Skill(props) {
  return (
    <div>
      <div>
        <button
          style={{
            backgroundColor: props.sColor,
            border: 0,
            borderRadius: "6px",
            display: "flex",
            padding: "4px",
            margin: "4px",
            color: "rgb(9, 9, 9)",
            fontWeight: "bold",
            paddingLeft: "10px",
            paddingRight: "10px"
          }}
        >
          {props.skillName}{props.emoji}
        </button>
      </div>
    </div>
  );
}

export default Skill;
