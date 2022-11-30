import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ClassesComponent from "./components/ClassesComponent/ClassesComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent.lazy";
import LoginComponent from "./components/LoginComponent/LoginComponent.lazy";
import MateriasInscritasComponent from "./components/MateriasInscritasComponent/MateriasInscritasComponent.lazy";
import SignupComponent from "./components/SignupComponent/SignupComponent.lazy";
import ResetPasswordComponent from "./components/ResetPasswordComponent/ResetPasswordComponent";
import ProfessorCoursesComponent from "./components/ProfessorCoursesComponent/ProfessorCoursesComponent";
import PublishClassComponent from "./components/PublishClassComponent/PublishClassComponent.lazy";
import ModifyProfileComponent from "./components/ModifyProfileComponent/ModifyProfileComponent.lazy";
import ChangePasswordComponent from "./components/ChangePasswordComponent/ChangePasswordComponent.lazy";
import LogoutComponent from "./components/LogoutComponent/LogoutComponent.lazy";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, yellow } from "@mui/material/colors";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({


  palette: {
    mode: 'dark',
    primary: yellow,
    secondary: deepPurple
  }})


function App() {
  const [user] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const loggedUserJSON = window.localStorage.getItem("loggedUser");
        if (loggedUserJSON) {
          const user = { ...JSON.parse(loggedUserJSON) };
        }
      } catch (err) {}
    };
    getUserData();
  }, []);
  return (

    <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<SignupComponent />} />
        <Route path="/classes" element={<ClassesComponent />} />
        <Route
          path="/assigned-classes"
          element={<ProfessorCoursesComponent />}
        />
        <Route path="/inscriptions" element={<MateriasInscritasComponent />} />
        <Route path="/reset-password" element={<ResetPasswordComponent />} />
        <Route path="/publish-class" element={<PublishClassComponent />} />
        <Route path="/modify-account" element={<ModifyProfileComponent />} />
        <Route path="/change-password" element={<ChangePasswordComponent />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
