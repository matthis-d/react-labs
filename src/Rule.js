import React, { useEffect, useState } from "react";
import classnames from "classnames";

import LikeButton from "./LikeButton";

class RuleDescription extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <p>{this.props.description}</p>
      </div>
    );
  }
}

function useToggle(initialValue) {
  const [folded, setFolded] = useState(initialValue);
  const toggle = () => {
    setFolded((prevFolded) => !prevFolded);
  };

  useEffect(() => {
    console.log("useToggle effect", folded);

    // cleanup effect
    return () => {
      console.log("will change");
    };
  }, [folded]);

  return {
    folded,
    toggle
  };
}

function Rule({ rule }) {
  const { folded, toggle } = useToggle(!rule.description);

  //c onst { folded: footerFolded, toggle: toggleFooter } = useToggle(false);

  return (
    <div className="panel panel-primary">
      <div className="panel-heading" role="presentation" onClick={toggle}>
        {rule.title}
        <i
          className={classnames(
            "pull-right glyphicon",
            folded ? "glyphicon-chevron-down" : "glyphicon-chevron-up"
          )}
        ></i>
      </div>
      {!folded && <RuleDescription description={rule.description} />}
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
            <LikeButton initialCount={rule.likes} />
            <LikeButton direction="down" initialCount={rule.dislikes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rule;
