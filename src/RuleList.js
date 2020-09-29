import React, { useEffect } from "react";
import Rule from "./Rule";

function RuleList({ rules, loadRules }) {
  useEffect(() => {
    loadRules();
  }, [loadRules]);

  return (
    <div>
      {rules.map((rule) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}

RuleList.defaultProps = {
  rules: [],
};

export default RuleList;
