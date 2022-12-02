import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { findEnrollmentsClass, updateEnrollment } from '../../services/class-enrollment.service';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});
const estadoOptions = [{
        value: 'Solicitada',
        label: 'Solicitada'
    }, {
        value: 'Aceptada',
        label: 'Aceptada'
    }, {
        value: 'Finalizada',
        label: 'Finalizada'
    }, {
        value: 'Cancelada',
        label: 'Cancelada'
    },];
const SolicitudesComponent = (props) => {
    const columns = [
        {
            field: 'student',
            headerName: 'Alumno',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Telefono',
            width: 150,
        },
        {
            field: 'mail',
            headerName: 'Mail',
            width: 170,
        },
        {
            field: 'timeslot',
            headerName: 'Horario de Contacto',
            width: 175,
        },
        {
            field: 'message',
            headerName: 'Mensaje',
            width: 350,
        },
        {
            field: 'status',
            headerName: 'Estado',
            type: 'singleSelect',
            width: 120,
            valueOptions: estadoOptions,
            editable: true,
            preProcessEditCellProps: async ({ props, row }) => {
                await editSolicitud(row.id, props.value);
                return props;
            }
        },
    ];
    const editSolicitud = async (id, value) => {
        try {
            await updateEnrollment({ id, status: value });
        }
        catch (error) {
        }
    };
    React.useEffect(() => {
        getRows();
    }, [props.open]);
    const [rows, setRows] = React.useState([]);
    const getRows = async () => {
        try {
            let response = await findEnrollmentsClass(props.row.id);
            response.data = response.data.map(row => {
                return {
                    id: row?.id,
                    message: row?.message,
                    status: row?.status,
                    timeslot: row?.timeslot,
                    student: row?.user_student?.name + ' ' + row?.user_student?.surname,
                    phone: row?.user_student?.phone,
                    mail: row?.user_student?.email
                };
            });
            setRows(response.data);
        }
        catch (error) {
            console.log(error);
        }
    };
    return (<Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
      <DialogTitle id="alert-dialog-title">
        Solicitudes de {props.row.name}
      </DialogTitle>
      <DialogContent>
        <DataGrid sx={{ height: 800, width: "100%", border: 10, borderRadius: 3,
            my: 0, mx: "auto", padding: 2 }} rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>);
};
export default SolicitudesComponent;
