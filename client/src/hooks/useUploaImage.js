import { useState } from "react";
import { uploadImage as _uploadImage } from "../services/api";

export default function useUploadImage() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadImage = async (file) => {
        try {
            setLoading(true);
            const response = await _uploadImage(file);
            setImage(response);
        } catch (err) {
            setError(err.message);
        } finally {
            //timeout 3s
            setTimeout(() => setLoading(false), 2500);
        }
    };
    const resetUploadImage = () => {
        setImage(null);
        setError(null);
        setLoading(false);
    };

    return { uploadImage, image, error, loading, resetUploadImage };
}