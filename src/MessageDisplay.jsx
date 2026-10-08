function MessageDisplay({ message }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        margin: "20px auto",
      }}
    >
      <h2>Message from Parent</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageDisplay;