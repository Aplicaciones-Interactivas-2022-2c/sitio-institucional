import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import CommentsComponent from "../CommentsComponent/CommentsComponent";
const CommentsProfessorComponent = (props) => {
  const deleteComment = (id) => {
    setComentarios(props?.comentarios?.filter((a) => a.id !== id));
  };
  React.useEffect(() => {
    setComentarios(props.comentarios);
  }, [props.comentarios]);
  const [comentarios, setComentarios] = React.useState(props.comentarios);
  return (
    <Dialog
      fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
        Comentarios de la{props.clase}
      </DialogTitle>
      <DialogContent>
        {comentarios?.map((comentario, i) => {
          return (
            <CommentsComponent
              key={i}
              mail={comentario?.student?.email}
              id={comentario?.id}
              comentario={comentario?.content}
              usuario={
                comentario?.student?.name + " " + comentario?.student?.surname
              }
              isProfesor={true}
              deleteComment={deleteComment}
            ></CommentsComponent>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};
export default CommentsProfessorComponent;
