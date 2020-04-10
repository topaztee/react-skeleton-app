import * as React from "react";
import {useEffect, useState} from "react";
import {withRouter} from "react-router";
import {createStyles, Grid, Paper, Theme, withStyles, WithStyles} from "../../elements/mui";
import HomeLayout from "./HomeLayout";

const Home = ({classes}: WithStyles) => {
  const [errorMessage, setErrorMessage] = useState();
  const [hasError, setHasEror] = useState(false);

  return (
    <>
      <HomeLayout
        hasError={hasError}
        errorMessage={errorMessage}
      >
        <Grid item xs={12}>
          hi
        </Grid>
      </HomeLayout>
    </>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    // example: {
    //   display: "flex",
    //   flexDirection: "row"
    // },
  });

export default withRouter(withStyles(styles)(Home));

