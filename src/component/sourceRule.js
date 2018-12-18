import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  ruleRoot: {
    paddingTop: 56,
    paddingLeft: 40,
    paddingRight: 40,
    height: "100%"
  },
  ruleFrame: {
    paddingTop: 24
  }
});

class sourceRule extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.ruleRoot}>
          <iframe
            className={classes.ruleFrame}
            title="sourceRule"
            frameBorder="no"
            border="0"
            scrolling="yes"
            width="100%"
            height="4734.360"
            src="/bookSource.html"
          />
        </div>
      </div>
    );
  }
}

sourceRule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(sourceRule);
