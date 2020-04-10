import {FormControl, InputLabel, Select} from "../elements";
import * as React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import {useRef, useState} from "react";
import {useEffect} from "react";
import set = Reflect.set;

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
      display: "flex",
      width: "100%",
      marginRight: theme.spacing(1),
      paddingBottom: theme.spacing(3)
    }
}));

export const DropDown = (labelTitle, inputLabelId, id, selected, hc, handleChangeProps, type, children) => {
  // availableFormats ===  undefined  && return;
  // Sets label width of the dropdowns
  const inputLabel = useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);
  const classes = useStyles(useStyles);

  return (
    <>
    <FormControl className={classes.formControl}>
      <InputLabel ref={inputLabel} id={inputLabelId}>
        {labelTitle !== "" && labelTitle}
      </InputLabel>
      <Select
        labelId={inputLabelId}
        id={id}
        value={selected || ""}
        onChange={event => {
          hc(event.target.value, handleChangeProps, type);
          }
        }
        labelWidth={labelWidth}
      >
        {children}
      </Select>
    </FormControl>
    </>
  )
};
