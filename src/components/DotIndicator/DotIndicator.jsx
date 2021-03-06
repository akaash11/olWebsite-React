import React from "react";
import PropTypes from "prop-types";

export default function DotIndicator({ slides, currentIndex, onDotClicked }) {
  /************************************
   * Render
   ************************************/

  const dots = slides.map((_, index) => (
    <button
      key={index}
      onClick={() => onDotClicked(index)}
      className={index === currentIndex ? "dot-active" : "dot"}
    />
  ));

  return (
    <div data-testid="dot-indicator" className="dot-indicator">
      {dots}
    </div>
  );
}

DotIndicator.propTypes = {
  slides: PropTypes.array.isRequired,
  onDotClicked: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired
};
