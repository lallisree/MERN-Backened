import { useState, useMemo } from "react";

function calculateDouble(num) {
  console.log("Calculation running...");

  let result = num * 2;

  for (let i = 0; i < 1000000; i++) {
    result = num * 2;
  }

  return result
}

const Multiply = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    return calculateDouble(number);
  }, [number]);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: "20px",
      }}
    >
      <h2>Number Multiplication</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h3>Double: {double}</h3>

      <button onClick={() => setDark(!dark)}>Change Theme</button>
    </div>
  );
};

export default Multiply
