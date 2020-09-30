import React from "react";
import PropTypes from "prop-types";

function LikeButton({ count, onClick, direction }) {
  return (
    <button
      className="btn btn-default"
      title={direction === "up" ? "+1" : "-1"}
      onClick={onClick}
    >
      {count} <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
    </button>
  );
}

LikeButton.propTypes = {
  direction: PropTypes.oneOf(["up", "down"]),
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

LikeButton.defaultProps = {
  direction: "up",
  count: 0,
};

export default LikeButton;
