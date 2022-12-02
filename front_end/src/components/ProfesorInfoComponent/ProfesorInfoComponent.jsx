import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
const ProfesorInfoComponent = (props) => (
  <Dialog
    fullWidth={true}
    open={props?.open}
    onClose={props?.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
      {props?.selectedProfesor.nombre}
    </DialogTitle>
    <DialogContent>
      {props?.selectedProfesor?.experiencia?.map((experiencia, i) => {
        return (
          <ul key={i}>
            <li>Descripcion: {experiencia?.type}</li>
            <li>Años de experiencia: {experiencia?.years}</li>
          </ul>
        );
      })}
    </DialogContent>
    <DialogActions>
      <Button onClick={props?.handleClose}>Cerrar</Button>
    </DialogActions>
  </Dialog>
);
export default ProfesorInfoComponent;
