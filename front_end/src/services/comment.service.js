import axios from "axios";
const baseUrl = 'http://localhost:4000/api/post-comment';
const blockCommentUrl = 'http://localhost:4000/api/block-comment';
export const uploadComment = async function (data) {
    const response = await axios.post(baseUrl, data);
    return response;
};
export const deleteComment = async function (data) {
    const response = await axios.post(blockCommentUrl, data);
    return response;
};
