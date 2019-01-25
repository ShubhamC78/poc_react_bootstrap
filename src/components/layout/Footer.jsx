import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Footer extends React.Component {
  constructor(props) {
    super(props)
    console.log("asd" + JSON.stringify(props));
    this.state = {
      value: 0,
    };
  }


  hello() {

  }
  handleChange = (event, value) => {
    this.setState({ value });
    console.log("On click value" + value + "       ");
  };

  render() {
    const { classes, muscles } = this.props;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Tab label="All" />
          {muscles.map(groups => 
          <Tab label={groups}  />)}
        </Tabs>
      </Paper>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);