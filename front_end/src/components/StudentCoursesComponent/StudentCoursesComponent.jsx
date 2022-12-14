import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ClearIcon from '@mui/icons-material/Clear';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Footer from '../FooterComponent/FooterComponent';
import ModalComentarComponent from '../ModalComentarComponent/ModalComentarComponent';
import styles from "./StudentCoursesComponent.module.scss";
import { getName, getUserId } from '../../hooks/authhook';
import ModalCancelarComponent from '../ModalCancelarComponent/ModalCancelarComponent';
import { findEnrollments } from '../../services/class-enrollment.service';
import { useTheme } from '@mui/material';

export default function StudentCoursesComponent() {
    const theme = useTheme();
    React.useEffect(() => {
        getRows();
    }, []);
    const [rows, setRows] = React.useState([]);
    const getRows = async () => {
        try {
            let response = await findEnrollments(getUserId());
            response.data = response.data.map(row => {
                return {
                    id: row?.id,
                    class: row?.class_student?.name,
                    professor: row?.class_student?.professor,
                    createdAt: new Date(row?.createdAt),
                    status: row?.status,
                    id_class: row?.id_class
                };
            });
            setRows(response.data);
        }
        catch (error) {
            console.log(error);
        }
    };
    const abrirModalComentarios = React.useCallback((row) => () => {
        setSelectedRow(row);
        handleClickOpenComentarios();
    }, []);
    const abrirModalCancelar = React.useCallback((row) => () => {
        setSelectedRow(row);
        handleClickOpenCancelar();
    }, []);
    const deshabilitarComentario = (row) => {
        return row.status !== 'Aceptada' && row.status !== 'Finalizada';
    };
    const deshabilitarCancelar = (row) => {
        return row.status === 'Cancelada' || row.status === 'Finalizada';
    };
    const columns = [
        {
            field: 'class',
            headerName: 'Clase',
            width: 150,
        },
        {
            field: 'professor',
            headerName: 'Profesor',
            width: 120,
        },
        {
            field: 'createdAt',
            headerName: 'Fecha de Inscripcion',
            width: 200,
            type: 'date'
        },
        {
            field: 'status',
            headerName: 'Estado',
            type: 'singleSelect',
            width: 100,
        },
        {
            field: 'comentar',
            headerName: '',
            type: 'actions',
            width: 70,
            getActions: (params) => [
                <GridActionsCellItem disabled={deshabilitarComentario(params.row)} icon={<AddCommentIcon />} onClick={abrirModalComentarios(params.row)} label="Ver Comentarios"/>,
                <GridActionsCellItem disabled={deshabilitarCancelar(params.row)} icon={<ClearIcon />} onClick={abrirModalCancelar(params.row)} label="Cancelar Inscripcion"/>,
            ],
            resizable: false
        },
    ];
    const [openComentarios, setOpenComentarios] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState({ materia: '', profesor: '' });
    const handleClickOpenComentarios = () => {
        setOpenComentarios(true);
    };
    const handleCloseComentarios = () => {
        setOpenComentarios(false);
    };
    const [openCancelar, setOpenCancelar] = React.useState(false);
    const handleClickOpenCancelar = () => {
        setOpenCancelar(true);
    };
    const handleCloseCancelar = () => {
        setOpenCancelar(false);
    };
    return (<div>
    <NavbarComponent></NavbarComponent>
    <div>
      <h4 className={styles.alumno}>Alumno: {getName()}</h4>
    </div>
    <Box sx={{ height: 600, width: '95%', border: 1, borderRadius: 3, boxShadow: 20,
            my: 0, mx: "auto", padding: 2 }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} sx={{ border: 1 }}/>
    </Box>
    <ModalComentarComponent row={selectedRow} open={openComentarios} handleClose={handleCloseComentarios}></ModalComentarComponent>
    <ModalCancelarComponent row={selectedRow} open={openCancelar} handleClose={handleCloseCancelar}></ModalCancelarComponent>
    <Footer></Footer>
    </div>);
}
