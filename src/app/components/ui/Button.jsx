export default function Button() {
  return (
    <button
      onClick={() => alert("Button clicked!")}
      style={{
        padding: "10px 20px",
        backgroundColor: "#2563eb", // blue
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Click Me
    </button>
  );
}
