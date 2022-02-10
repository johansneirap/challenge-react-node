import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/posts';

export const getAllPosts = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

export const createPost = async(post)=>{
    const res = await axios.post(baseUrl,post);
    return res.data;

}