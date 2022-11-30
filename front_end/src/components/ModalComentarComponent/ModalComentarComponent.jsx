import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import { getUserId } from '../../hooks/authhook';
import { uploadComment } from '../../services/comment.service';
import RatingComponent from '../RatingComponent/RatingComponent';
const ModalComentarComponent = (props) => {
    const handleSendComment = async () => {
        try {
            const payload = {
                id_student: getUserId(),
                id_class: props.row.id_class,
                content: comment,
                stars
            };
            await uploadComment(payload);
            window.location.reload();
            props.handleClose();
        }
        catch (error) {
        }
    };
    const updateComment = (event) => {
        setComment(event.currentTarget.value);
    };
    const [stars, setStars] = React.useState(0);
    const receiveStars = (receivedStars) => {
        setStars(receivedStars);
    };
    const [comment, setComment] = React.useState('');
    return (<Dialog fullWidth={true} open={props.open} onClose={props.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          Comentar {props.row.class} de {props.row.professor}
        </DialogTitle>
        <DialogContent>
        <RatingComponent sendValue={receiveStars}></RatingComponent>
        <TextField fullWidth={true} id="outlined-multiline-static" label="comentario" multiline rows={3} placeholder="Comentario..." value={comment} onChange={updateComment}/>

        </DialogContent>
        <DialogActions>
        <Button onClick={handleSendComment} variant="text">Publicar</Button>
          <Button onClick={props.handleClose}>Cerrar</Button>
        </DialogActions>
  </Dialog>);
};
export default ModalComentarComponent;
