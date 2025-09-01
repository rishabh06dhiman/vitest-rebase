import React, { useState } from "react";
import { Publish } from "./Publish";

export const Adder =()=> {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [showPublish, setShowPublish] = useState(false);
  

  const handleAdd = () => {
    // Convert inputs to numbers and add
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handlePublish = () => {
    alert(`Result ${result} has been published ✅`);
    setShowPublish(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Adder</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />
      <button onClick={handleAdd}>Add Numbers</button>
      <br /><br />
      {result !== null && (
        <>
          <h3>Result: {result}</h3>
          <button onClick={() => setShowPublish(true)}>Publish Result</button>
        </>
      )}

       {showPublish && (
        <Publish
          result={result}
          onClose={() => setShowPublish(false)}
          onPublish={handlePublish}
        />
      )}
    </div>
  );
}


