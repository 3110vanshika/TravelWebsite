import React from "react";

export default function BackgroundImage({ imageUrl, children }) {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "700px",
    position: 'relative'
  };

  return (
    <div style={style}>
      <div className="overlay">
        {children}
      </div>
    </div>
  );
}
