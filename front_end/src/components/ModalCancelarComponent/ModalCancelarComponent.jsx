import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import React from 'react';
import { updateEnrollment } from '../../services/class-enrollment.service';
const ModalCancelarComponent = (props) => {
    const handleSend = async () => {
        try {
            await updateEnrollment({ id: props.row.id, status: 'Cancelada' });
            window.location.reload();
            props.handleClose();
        }
        catch (error) {
        }
    };
    return (<Dialog fullWidth={true} open={props.open} onClose={props.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          Estas seguro de que desea cancelar {props.row.class} de {props.row.professor}?
        </DialogTitle>
        <DialogActions>
        <Button onClick={handleSend} variant="text">Cancelar Inscripcion</Button>
        <Button onClick={props.handleClose}>Cerrar</Button>
        </DialogActions>
  </Dialog>);
};
export default ModalCancelarComponent;
