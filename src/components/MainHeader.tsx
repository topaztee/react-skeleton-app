import * as React from "react";
import {AppBar, createStyles, Theme, Toolbar, withStyles, WithStyles,} from "../elements/mui";

const logoImageUrl = require("../assets/logo.png");

const MainHeader = ({classes}: WithStyles) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.leftContainer}>
            <img src={logoImageUrl.default} className={classes.logoImg}/>
            title
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: 56,
    padding: '0 32px',
    background: 'transparent',
    boxShadow: 'none',
    borderBottom: "1px solid rgb(224, 224, 224)",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    // flexBasis: 180,
    // justifyContent: "space-between",
    color: "black"
  },
  signOut: {
    cursor: "pointer",
    color: theme.palette.grey["100"],
    fontSize: 14
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logoImg: {
    height: 40
  },
  rightContainer: {
    padding: "0 5px",
    display: "flex",
    color: "inherit",
    alignItems: "center"
  },
  toolbar: {
    height: "100%",
    minHeight: "auto",
    justifyContent: "space-between"
  }
});

export default withStyles(styles)(MainHeader);
