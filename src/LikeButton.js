import React from "react";
import PropTypes from "prop-types";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { direction } = this.props;
    const { count } = this.state;

    return (
      <button
        className="btn btn-default"
        title={direction === "up" ? "+1" : "-1"}
        onClick={this.increment}
      >
        {count} <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
      </button>
    );
  }
}

LikeButton.propTypes = {
  direction: PropTypes.oneOf(["up", "down"]),
  initialCount: PropTypes.number
};

LikeButton.defaultProps = {
  direction: "up",
  initialCount: 0
};

export default LikeButton;
