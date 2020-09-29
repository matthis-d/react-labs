export const DO_LIKE = "DO_LIKE";
export const DO_DISLIKE = "DO_DISLIKE";

// Action creator to like a rule with a given id
export function doLike(ruleId) {
  return {
    type: DO_LIKE,
    payload: ruleId,
  };
}

// Action creator to dislike a rule with a given id
export function doDislike(ruleId) {
  return {
    type: DO_DISLIKE,
    payload: ruleId,
  };
}
