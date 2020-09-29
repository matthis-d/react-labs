import { DO_DISLIKE, DO_LIKE } from "../actions/likes.actions";
import { RULES_LOADED } from "../actions/rules.actions";

// We could use immer.js to update things

function ruleReducer(rule = {}, action) {
  if (rule.id !== action.payload) {
    return rule;
  }

  switch (action.type) {
    case DO_LIKE:
      return { ...rule, likes: rule.likes + 1 };

    case DO_DISLIKE:
      return { ...rule, dislikes: rule.dislikes + 1 };

    default:
      return rule;
  }
}

export function rulesReducer(prevRules = [], action) {
  switch (action.type) {
    case RULES_LOADED:
      return action.payload;

    case DO_LIKE:
    case DO_DISLIKE: {
      // Find the rule with the id in payload
      // And increment its likes/dislikes count
      return prevRules.map((rule) => ruleReducer(rule, action));
    }

    default:
      return prevRules;
  }
}
