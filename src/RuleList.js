import React, { useEffect } from "react";
import axios from "axios";
import Rule from "./Rule";
import { useQuery } from "react-query";

function RuleList({ rules, loadRules }) {
  /*const { isLoading, error, data: rules } = useQuery("rules", async () => {
    const { data } = await axios.get(
      "https://m7p0j.sse.codesandbox.io/rest/rules",
    );
    return data;
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Oups</div>;
  }*/

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
