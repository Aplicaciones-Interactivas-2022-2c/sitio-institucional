import axios from "axios";
const baseUrl = 'http://localhost:4000/api/register';
const resetPasswordUrl = 'http://localhost:4000/api/reset-password';
const changePasswordUrl = 'http://localhost:4000/api/change-password';


export const register = async function (data) {
    const response = await axios.post(baseUrl, data);
    return response;
};
export const resetPassword = async (data) => {
    const response = await axios.post(resetPasswordUrl, data);
    return response;
};
export const changePassword = async (data) => {
    const response = await axios.post(changePasswordUrl, data);
    return response;
};
