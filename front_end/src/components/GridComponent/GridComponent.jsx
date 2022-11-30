import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CommentIcon from "@mui/icons-material/Comment";
import ProfesorInfoComponent from "../ProfesorInfoComponent/ProfesorInfoComponent";
import CommentsListComponent from "../CommentsListComponent/CommentsListComponent";
import ClassRequestComponent from "../ClassRequestComponent/ClassRequestComponent";
import styles from "./GridComponent.module.scss";
import { isLoggedIn } from "../../hooks/authhook";
import { useNavigate } from "react-router-dom";
import { filterClass } from "../../services/class.service";
import { getProfessorExperience } from "../../services/experience.service";
const GridComponent = (props) => {
  React.useEffect(() => {
    getRows();
  }, []);
  const [rows, setRows] = React.useState([]);
  const getRows = async () => {
    try {
      const payload = {
        name: props?.filters?.materia?.label,
        type: props?.filters?.tipoDeClase?.label,
        frequency: props?.filters?.frecuencia?.label,
        rating: parseInt(props?.filters?.calificacion?.label),
        status: "Publicada",
      };
      const response = await filterClass(payload);
      response.data = response.data.map((row) => {
        return {
          ...row,
          professor:
            row?.professor_user?.name + " " + row?.professor_user?.surname,
          professor_id: row?.professor,
        };
      });
      setRows(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  let navigate = useNavigate();
  const inscribirMateria = React.useCallback(
    (row) => () => {
      if (isLoggedIn()) {
        setMateria({ nombre: row.name, id: row.id });
        handleClickOpenSolicitud();
      } else {
        navigate("/login");
      }
    },
    []
  );
  const verComentario = React.useCallback(
    (row) => () => {
      setMateria({ nombre: row.name, id: row.id });
      setProfesor({
        id: row?.professor,
        nombre: row?.professor_user?.name + " " + row?.professor_user?.surname,
        experiencia: row.professorExperience ? row.professorExperience : null,
      });
      const comentarios = row.comments.map((comment) => {
        return {
          id: comment.id,
          usuario: comment.student.name + " " + comment.student.surname,
          comentario: comment.content,
        };
      });
      setComentarios(comentarios);
      handleClickOpenComentarios();
    },
    []
  );
  const columns = [
    {
      field: "professor",
      headerName: "Profesor",
      width: 150,
      cellClassName: styles.professorCell,
    },
    {
      field: "name",
      headerName: "Materia",
      width: 150,
    },
    {
      field: "duration",
      headerName: "Duracion",
      width: 110,
    },
    {
      field: "cost",
      headerName: "Costo",
      type: "number",
      width: 75,
    },
    {
      field: "rating",
      headerName: "Calificacion",
      type: "number",
      width: 120,
    },
    {
      field: "actions",
      headerName: "",
      type: "actions",
      width: 70,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CommentIcon />}
          onClick={verComentario(params.row)}
          label="Ver Comentarios"
        />,
        <GridActionsCellItem
          icon={<AddIcon />}
          onClick={inscribirMateria(params.row)}
          label="Inscribir Materia"
        />,
      ],
    },
  ];
  const cellClickHandler = (params, event, details) => {
    if (params.field === "professor") {
      setMateria({ nombre: params.row.name, id: params.row.id });
      console.log(selectedProfesor);
      handleClickOpenProfesor(params.row.professor, params.row.professor_id);
    }
  };
  const [openComentarios, setOpenComentarios] = React.useState(false);
  const [selectedComentarios, setComentarios] = React.useState([
    {
      usuario: "",
      comentario: "",
      id: null,
    },
  ]);
  const handleClickOpenComentarios = () => {
    setOpenComentarios(true);
  };
  const handleCloseComentarios = () => {
    setOpenComentarios(false);
  };
  const [openProfesor, setOpenProfesor] = React.useState(false);
  const [selectedProfesor, setProfesor] = React.useState({
    id: null,
    nombre: "",
    experiencia: [
      {
        type: "",
        years: 0,
      },
    ],
  });
  const handleClickOpenProfesor = async (professorName, id) => {
    try {
      const professor = await getProfessorExperience({ user_id: id });
      setProfesor({
        id: id,
        nombre: professorName,
        experiencia: professor?.data,
      });
      setOpenProfesor(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseProfesor = () => {
    setOpenProfesor(false);
  };
  const [openSolicitud, setOpenSolicitud] = React.useState(false);
  const handleClickOpenSolicitud = () => {
    setOpenSolicitud(true);
  };
  const handleCloseSolicitud = () => {
    setOpenSolicitud(false);
  };
  const [selectedMateria, setMateria] = React.useState();
  return (
    <div className={styles.GridComponent}>
      <Box
        sx={{
          height: 600,
          width: "95%",
          boxShadow: 20,
          my: 0,
          mx: "auto",
          padding: 2,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          onCellClick={cellClickHandler}
          sx={{ border: 1 }}
        />
        <ProfesorInfoComponent
          open={openProfesor}
          selectedProfesor={selectedProfesor}
          handleClose={handleCloseProfesor}
        />
        <CommentsListComponent
          open={openComentarios}
          comentarios={selectedComentarios}
          handleClose={handleCloseComentarios}
          materia={selectedMateria?.nombre}
          profesor={selectedProfesor}
        />
        <ClassRequestComponent
          open={openSolicitud}
          handleClose={handleCloseSolicitud}
          clase={selectedMateria}
        ></ClassRequestComponent>
      </Box>
    </div>
  );
};
export default GridComponent;
