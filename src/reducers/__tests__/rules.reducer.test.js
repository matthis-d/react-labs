import { RULES_LOADED } from "../../actions/rules.actions";
import { rulesReducer } from "../rules.reducer";

describe("rulesReducer", () => {
  it("should an empty array by default", () => {
    expect(rulesReducer(undefined, {})).toEqual([]);
  });

  it("should return rules provided in action when action type is RULES_LOADED", () => {
    const action = {
      type: RULES_LOADED,
      payload: [{ id: 1 }],
    };
    expect(rulesReducer([], action)).toEqual([{ id: 1 }]);
  });
});
