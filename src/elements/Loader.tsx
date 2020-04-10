import {CircularProgress} from "@material-ui/core";
import {createStyles, Theme, Typography, withStyles, WithStyles} from "./mui";
import * as React from "react";

const Loader = ({classes, loading = false, children = null, text, className = ""}: LoaderProps & WithStyles) => {
  const loader = (
    <div className={[classes.root, className].join(" ")}>
      <div>
        <CircularProgress color="primary" size={60}/>
        <Typography variant="body2" paragraph className={classes.text}>
          {text}
        </Typography>
      </div>
    </div>
  );

  return loading ? loader : children;
};

interface LoaderProps {
  children?: any;
  loading: boolean;
  text?: string;
  className?: string;
}

const styles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: "1 0 auto"
  },
  text: {
    margin: theme.spacing(2)
  }
});

export default withStyles(styles)(Loader);
