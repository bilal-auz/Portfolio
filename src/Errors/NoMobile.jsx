import React from "react";
import "./NoMobile.scss";

function NoMobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          color: "#0b7666",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        The protfolio does not support mobile 📱
        <span
          style={{
            fontSize: "15px",
            textAlign: "center",
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          (Noy Responsive)
        </span>
        <br />
        Please use your nearest laptop 💻
      </h1>
    </div>
  );
}

export default NoMobile;
