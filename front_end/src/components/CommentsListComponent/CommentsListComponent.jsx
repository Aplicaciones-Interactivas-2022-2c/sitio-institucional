import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import CommentsComponent from "../CommentsComponent/CommentsComponent";
const CommentsListComponent = (props) => (
  <Dialog
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      Comentarios de {props.materia} con {props.profesor?.nombre}
    </DialogTitle>
    <DialogContent>
      {props?.comentarios?.map((comentario, i) => {
        return (
          <CommentsComponent
            key={i}
            comentario={comentario.comentario}
            usuario={comentario.usuario}
            isProfesor={false}
          ></CommentsComponent>
        );
      })}
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose}>Cerrar</Button>
    </DialogActions>
  </Dialog>
);
export default CommentsListComponent;
