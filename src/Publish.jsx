import React from "react";

export const  Publish = ({ result, onClose, onPublish }) => {
  if (result === null) return null; // Don’t show modal if no result yet

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <h3>Publish Result</h3>
        <p>Result: <strong>{result}</strong></p>
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={onPublish}
            style={{ marginRight: "10px", padding: "6px 12px" }}
          >
            Publish
          </button>
          <button onClick={onClose} style={{ padding: "6px 12px" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


