import {Grid, withStyles} from "@material-ui/core";
import {createStyles, Theme, WithStyles} from "../elements/mui";
import * as React from "react";
import MainHeader from "./MainHeader";
import {ReactNode} from "react";
import {MySnackbarContentWrapper} from "../utils/SnackBar";

interface SingleColPageProps {
    content?: ReactNode;
    hasError?: boolean;
    errorMessage?: string;
}

const SingleColPage = ({hasError, errorMessage, content = null, classes}: SingleColPageProps & WithStyles) => {
    return (
        <Grid container direction="column" wrap="nowrap" className={classes.container}>
            <Grid item className={classes.headerContainer}>
                <MainHeader/>
                {hasError ? (
                  <MySnackbarContentWrapper
                    variant="error"
                    className={classes.formControl}
                    message={errorMessage}
                    onClose={()=>{window.location.reload()}} />) : ""}
            </Grid>
            <Grid item className={classes.contentContainer}>
                <div className={classes.content}>{content}</div>
            </Grid>
        </Grid>
    );
};

const styles = (theme: Theme) => createStyles({
    container: {
        height: "100vh"
    },
    contentContainer: {
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh"
    },
    content: {
        height: "100vh",
        width: "100vh"
    }
});

export default withStyles(styles)(SingleColPage);
