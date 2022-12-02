import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
export default function DropdownComponent(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: 300 }}
      autoHighlight
      onChange={props.onInputChange}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
