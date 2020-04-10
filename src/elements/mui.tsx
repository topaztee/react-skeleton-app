// This file contains everything we pull from @material-io/core.
// This way we have a single integration point in our app for material-ui.

//Core
export {
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
  Theme,
  WithStyles
} from "@material-ui/core/styles";
export { default as AppBar } from "@material-ui/core/AppBar";

// Core
export { default as Typography } from "@material-ui/core/Typography/Typography";
export { default as Toolbar } from "@material-ui/core/Toolbar";
export { default as withStyles } from "@material-ui/core/styles/withStyles";
export { default as Button } from "@material-ui/core/Button/Button";
export { default as FormControl } from "@material-ui/core/FormControl";
export { default as InputLabel } from "@material-ui/core/InputLabel";
export { default as Select } from "@material-ui/core/Select";
export { default as MenuItem } from "@material-ui/core/MenuItem";
export { default as Menu } from "@material-ui/core/Menu/Menu";
export { default as Icon } from "@material-ui/core/Icon";
export { default as Grid } from "@material-ui/core/Grid";
export { default as Paper } from "@material-ui/core/Paper";
export { MenuItemTypeMap } from "@material-ui/core";
export { OverridableComponent } from "@material-ui/core/OverridableComponent";
export { default as Slider } from "@material-ui/core/Slider";

// Icons
export { VolumeUp, VolumeDown } from "@material-ui/icons";
export { default as FullscreenIcon } from "@material-ui/icons/Fullscreen";

export { default as ToggleButton } from '@material-ui/lab/ToggleButton';
