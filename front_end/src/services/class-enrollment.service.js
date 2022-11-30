import axios from "axios";
const baseUrl = 'http://localhost:4000/api/request-class';
const findRequestURL = 'http://localhost:4000/api/get-class-requests';
const updateUrl = 'http://localhost:4000/api/update-class-requests';
export const enrollClass = async function (data) {
    const response = await axios.post(baseUrl, data);
    return response;
};
export const findEnrollments = async function name(idStudent) {
    let url = findRequestURL + '?id_student=' + idStudent;
    const response = await axios.get(url);
    return response;
};
export const findEnrollmentsClass = async function name(idClass) {
    let url = findRequestURL + '?id_class=' + idClass;
    const response = await axios.get(url);
    return response;
};
export const updateEnrollment = async function name(data) {
    const response = await axios.post(updateUrl, data);
    return response;
};
