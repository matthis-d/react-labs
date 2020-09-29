import { connect } from "react-redux";
import { rulesLoaded } from "./actions/rules.actions";
import RuleList from "./RuleList";

const mapStateToProps = (state) => {
  return {
    rules: state.rules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRules: () => {
      dispatch(rulesLoaded());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleList);
