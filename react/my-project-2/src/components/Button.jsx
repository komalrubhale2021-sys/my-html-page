

export function Button({ text, color }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "5px",
    fontSize: "16px",
  };

  return <button style={buttonStyle}>{text}</button>;
}
