import axios from "axios";
const baseUrl = 'http://localhost:4000/api/create-class';
const filterUrl = 'http://localhost:4000/api/filter-class';
const updateUrl = 'http://localhost:4000/api/update-class';
const deleteUrl = 'http://localhost:4000/api/delete-class';
export const addClass = async function (data) {
    const response = await axios.post(baseUrl, data);
    return response;
};
export const filterClass = async (data) => {
    const response = await axios.post(filterUrl, data);
    return response;
};
export const updateClass = async (data) => {
    const response = await axios.post(updateUrl, data);
    return response;
};
export const deleteClass = async (id) => {
    const response = await axios.delete(deleteUrl, { params: { id } });
    return response;
};
