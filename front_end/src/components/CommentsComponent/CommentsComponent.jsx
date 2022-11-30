import { Box } from "@mui/material";
import React from "react";
import styles from "./CommentsComponent.module.scss";
import BlockIcon from "@mui/icons-material/Block";
import BlockStudentCommentComponent from "../BlockStudentCommentComponent/BlockStudentCommentComponent";
const CommentsComponent = (props) => {
  const abrirModalBloquear = React.useCallback(
    () => () => {
      handleClickOpenBloquear();
    },
    []
  );
  const [openBloquear, setOpenBloquear] = React.useState(false);
  const handleClickOpenBloquear = () => {
    setOpenBloquear(true);
  };
  const handleCloseBloquear = (isDelete = false) => {
    if (isDelete) {
      props.deleteComment(props.id);
    }
    setOpenBloquear(false);
  };
  return (
    <Box
      sx={{
        borderStyle: "dashed",
        borderColor: "#00000086",
        my: 1,
        mx: "auto",
        padding: 1,
      }}
    >
      <div className={styles.title}>{props.usuario}</div>
      <div className={styles.subtitle}>{props.comentario}</div>
      {props.isProfesor && (
        <BlockIcon
          sx={{ mx: 1, my: 1 }}
          onClick={abrirModalBloquear()}
        ></BlockIcon>
      )}
      <BlockStudentCommentComponent
        usuario={props.usuario}
        comentario={props.comentario}
        id={props.id}
        mail={props.mail}
        open={openBloquear}
        handleClose={handleCloseBloquear}
      ></BlockStudentCommentComponent>
    </Box>
  );
};
export default CommentsComponent;
