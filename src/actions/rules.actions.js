import data from "../data.json";

export const RULES_LOADED = "RULES_LOADED";

// Action creator
export function rulesLoaded() {
  return {
    type: RULES_LOADED,
    payload: data,
  };
}
