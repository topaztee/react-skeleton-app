import { SyntheticEvent } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as React from "react";
import Home from "../components/Home/Home";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600],
    borderRadius: 0
  },
  error: {
    backgroundColor: theme.palette.error.dark,
    borderRadius: 0
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0
  },
  warning: {
    backgroundColor: amber[700],
    borderRadius: 0
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export interface Props {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: keyof typeof variantIcon;
}

export function MySnackbarContentWrapper(props: Props) {
  const classes = useStyles1(useStyles1);
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

const useStyles2 = makeStyles((theme: Theme) => ({
  margin: {
    margin: theme.spacing(1),
    borderRadius: 0
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles2(Home);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className={classes.margin} onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="This is a success message!"
        />
      </Snackbar>
      <MySnackbarContentWrapper
        variant="error"
        className={classes.margin}
        message="This is an error message!"
      />
      <MySnackbarContentWrapper
        variant="warning"
        className={classes.margin}
        message="This is a warning message!"
      />
      <MySnackbarContentWrapper
        variant="info"
        className={classes.margin}
        message="This is an information message!"
      />
      <MySnackbarContentWrapper
        variant="success"
        className={classes.margin}
        message="This is a success message!"
      />
    </div>
  );
}
