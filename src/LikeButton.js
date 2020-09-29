import React, { useState } from "react";
import PropTypes from "prop-types";

function LikeButton({ initialCount, direction }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button
      className="btn btn-default"
      title={direction === "up" ? "+1" : "-1"}
      onClick={increment}
    >
      {count} <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
    </button>
  );
}

LikeButton.propTypes = {
  direction: PropTypes.oneOf(["up", "down"]),
  initialCount: PropTypes.number,
};

LikeButton.defaultProps = {
  direction: "up",
  initialCount: 0,
};

export default LikeButton;
