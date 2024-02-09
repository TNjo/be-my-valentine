import React, { useState } from "react";
import Confetti from "react-confetti"; // Import Confetti component
import "./App.css"; // You can define your CSS styles in App.css file

function App() {
  const [yesButtonStyle, setYesButtonStyle] = useState({
    height: "60px",
    width: "100px",
    "font-size": "30px",
  });

  const [noButtonStyle, setNoButtonStyle] = useState({
    height: "60px",
    width: "100px",
  });

  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti visibility
  const [showCongratulations, setShowCongratulations] = useState(false); // State to control "Congratulations" heading
  const [showButtons, setShowButtons] = useState(true); // State to control button visibility

  const [headingText, setHeadingText] = useState("Can You Be My Valentine"); // State for heading text

  const handleNoButtonHover = () => {
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerWidth - 100);

    setNoButtonStyle({
      top: newTop,
      left: newLeft,
      height: "60px",
      width: "100px",
    });

    setYesButtonStyle((prevStyle) => ({
      height: `${parseInt(prevStyle.height) + 10}px`,
      width: `${parseInt(prevStyle.width) + 10}px`,
      "font-size": `${parseInt(prevStyle["font-size"]) + 5}px`,
    }));
  };

  const handleYesButtonClick = () => {
    setShowConfetti(true); // Show confetti
    setShowCongratulations(true); // Show "Congratulations" heading
    setHeadingText("Congratulations"); // Change heading text
    setShowButtons(false); // Hide buttons
  };

  const handleNoButtonTouch = (event) => {
    event.preventDefault();
    handleNoButtonHover();
  };

  return (
    <div className="App">
      <h1 className="head">{headingText}</h1>
      {showButtons && (
        <>
          <button
            className="yes-button"
            style={yesButtonStyle}
            onClick={handleYesButtonClick}
          >
            Yes
          </button>
          <button
            className="no-button"
            onMouseEnter={handleNoButtonHover}
            onTouchStart={handleNoButtonTouch}
            style={noButtonStyle}
          >
            No
          </button>
        </>
      )}
      {showConfetti && <Confetti />}{" "}
      {/* Show confetti if showConfetti is true */}
      {!showButtons && <div className="heart-image" />}{" "}
      {/* Show heart image if buttons are hidden */}
    </div>
  );
}

export default App;
