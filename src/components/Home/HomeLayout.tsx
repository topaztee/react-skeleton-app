import * as React from "react";
import {FunctionComponent, ReactNode} from "react";
import MainHeader from "../MainHeader";
import {MySnackbarContentWrapper} from "../../utils/SnackBar";
import {createStyles, Grid, Theme, withStyles, WithStyles} from "../../elements";

interface HomeLayoutPageProps {
  hasError?: boolean;
  errorMessage?: string;
}

const HomeLayout: FunctionComponent<HomeLayoutPageProps & WithStyles> = ({hasError, errorMessage, classes, children}) => {
  return (
    <>
      <MainHeader/>
      {hasError ? (
        <MySnackbarContentWrapper
          variant="error"
          className={classes.formControl}
          message={errorMessage}
          onClose={() => {
            window.location.reload()
          }}/>) : ""}
      <div style={{ padding: 20 }}>
      <Grid container spacing={8} direction="row" justify="flex-start" alignItems="flex-start">
        {children}
      </Grid>
      </div>
    </>
  );
};

const styles = (theme: Theme) => createStyles({
  contentContainer: {
    display: "flex",
    flexDirection: "row",
  }
});

export default withStyles(styles)(HomeLayout);
