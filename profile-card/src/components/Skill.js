function Skill(Props) {
  return (
    <div>
      <div>
        <button
          style={{

            backgroundColor: Props.sColor,
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
          {Props.skillName}
        </button>
      </div>
    </div>
  );
}

export default Skill;
