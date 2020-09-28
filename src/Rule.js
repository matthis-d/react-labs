import React from "react";
import classnames from "classnames";

class Rule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folded: !props.rule.description,
    };
  }

  toggleDescription = () => {
    this.setState((prevState) => ({
      folded: !prevState.folded,
    }));
  };

  render() {
    const { rule } = this.props;
    const { folded } = this.state;

    return (
      <div className="panel panel-primary">
        <div
          className="panel-heading"
          role="presentation"
          onClick={this.toggleDescription}
        >
          {rule.title}
          <i
            className={classnames(
              "pull-right glyphicon",
              folded ? "glyphicon-chevron-down" : "glyphicon-chevron-up"
            )}
          ></i>
        </div>
        <div className={classnames("panel-body", { hidden: folded })}>
          <p>{rule.description}</p>
        </div>
        <div className="panel-footer">
          <div className="btn-toolbar">
            {rule.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}

            <div className="btn-group btn-group-xs pull-right">
              <a className="btn btn-primary" title="Update">
                <i className="glyphicon glyphicon-pencil"></i>
              </a>
            </div>
            <div className="btn-group btn-group-xs pull-right">
              <a className="btn btn-default" title="+1">
                {rule.likes} <i className="glyphicon glyphicon-thumbs-up"></i>
              </a>
              <a className="btn btn-default" title="-1">
                {rule.dislikes}{" "}
                <i className="glyphicon glyphicon-thumbs-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rule;
