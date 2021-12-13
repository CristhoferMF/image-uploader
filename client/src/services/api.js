import axios from './axios';

const uploadImage = async (file) => {
    const data = new FormData();
    data.append('image', file);
    try {
        const res = await axios.post('/images', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    }catch (e) {
        throw new Error(e.response.data.message);
    }
}

export {
    uploadImage
}