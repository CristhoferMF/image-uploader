import Button from './Button'
import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect } from 'react'
import PlaceImage from '../images/placeholder.svg'
import useUploadImage from '../hooks/useUploaImage'
import ProgressBar from './ProgressBar'
import { ENDPOINT } from '../config/api'

export default function ImageUploader() {
    //create a ref
    const { uploadImage, image, error, loading, resetUploadImage  } = useUploadImage()
    const onDrop = useCallback(([file]) => {
        const _uploadImage = async () => {
            await uploadImage(file);
        }
        _uploadImage();
    }, [uploadImage])

    const { getRootProps, getInputProps, isDragActive, inputRef, rootRef } = useDropzone({ onDrop })
    
    useEffect(() => {
        if (!isDragActive) return ;
        const rootCurrent = rootRef.current;
        rootCurrent.classList.remove('bg-gray-50')
        rootCurrent.classList.add('bg-blue-50')
        return () => {
            rootCurrent.classList.add('bg-gray-100')
            rootCurrent.classList.remove('bg-blue-50')
        }
    }, [isDragActive,rootRef]);

    if (loading || error) {
        return (<div className="flex flex-col text-left items-center gap-5 bg-white px-7 rounded-xl shadow-lg py-8 w-96">
            <h1 className="w-full text-2xl font-medium text-gray-600">{error ? "An error": "Uploading..."}</h1>
            <div className="w-full">
                { !error ? <ProgressBar/> : <span className="text-red-600">{error}</span> }
            </div>
            <div className="w-full text-left">
            {error && <Button onClick={() => resetUploadImage()}>Back</Button>}
            </div>
        </div>)
    }
    if (image){
        return (
            <div className="flex flex-col text-center items-center gap-5 bg-white px-7 rounded-xl shadow-lg py-8 w-96">
                <h1 className="text-xl font-medium text-gray-600">Uploaded Successfully!</h1>
                <img src={ENDPOINT + image.url} alt={image.name} className="object-cover bg-gray-50 duration-300 h-60 rounded-xl border-2 w-full" />
                <div className="flex w-full bg-gray-100 text-sm rounded-xl border-2">
                    <span className="w-full overflow-hidden  text-ellipsis p-2 whitespace-nowrap">
                    {ENDPOINT + image.url}
                    </span>
                    <Button className="float-right z-10 text-sm whitespace-pre" onClick={() => {
                        navigator.clipboard.writeText(ENDPOINT + image.url);
                    }} >Copy Link</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col text-center items-center gap-5 bg-white px-7 rounded-xl shadow-lg py-8 w-96">
            <h1 className="text-2xl font-medium text-gray-600">Upload your image</h1>
            <p className="text-gray-500 text-sm">File should be Jpeg, Png...</p>
            <div id="dd_zone" className="bg-gray-50 hover:bg-gray-100 duration-300 py-10 cursor-pointer rounded-md border-2 w-full" {...getRootProps()}>
                <input {...getInputProps({
                    accept: 'image/Jpeg, image/Png',
                    multiple: false
                })} ref={inputRef} />
                <img src={PlaceImage} alt="placeholder" className="w-full h-24" />
                {isDragActive ? 
                    <p className="text-sm text-gray-400 mt-5">Drop the files here ...</p> :
                    <p className="text-sm text-gray-400 mt-5">Drag and drop your files here</p>
                }
            </div>
            <p>Or</p>
            <div>
                <Button onClick={() => inputRef.current.click()}>
                    Choose file
                </Button>
            </div>
        </div>
    )
}