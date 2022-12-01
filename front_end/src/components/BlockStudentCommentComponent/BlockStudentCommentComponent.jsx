import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { deleteComment } from "../../services/comment.service";

// We Block the comments of a student
const BlockStudentCommentComponent = (props) => {
  const [reason, setBlockReason] = React.useState("");
  const inputChange = (event) => {
    setBlockReason(event.currentTarget.value);
  };

  // We block the student comment
  const handleSend = async () => {
    try {
      const payload = {
        id: props.id,
        mail: props.mail,
        message: reason,
      };
      await deleteComment(payload);
      props.handleClose(true);
    } catch (error) {
      props.handleClose(false);
    }
  };
  const handleClose = () => {
    props.handleClose(false);
  };

  return (

    // We show the dialog to block the comment
    <Dialog
      fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ my: 1, textAlign: "center" }}>
        Bloquear comentario de {props.usuario}
      </DialogTitle>
      <DialogContent>
        Quiere bloquear el comentario?
        <br></br>
        <span>"{props.comentario}"</span>
        <br></br>
        <TextField
          sx={{ my: 1, width: "100%" }}
          id="outlined-multiline-static"
          label="razon de Bloqueo"
          multiline
          rows={3}
          placeholder="razon de bloqueo..."
          onChange={inputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={!reason.length} onClick={handleSend}>
          Bloquear
        </Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};
export default BlockStudentCommentComponent;
