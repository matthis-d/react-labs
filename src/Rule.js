import React from "react";

class Rule extends React.Component {
  render() {
    const { rule } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading" role="presentation">
          {rule.title}
          <i className="pull-right glyphicon glyphicon-chevron-down"></i>
        </div>
        <div className="panel-body">
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
