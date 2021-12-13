import { useEffect, useState } from "react"

export default function Button(props) 
{
    const initialClass  = "bg-blue-500 hover:bg-blue-600 duration-150 text-white font-bold py-2 px-4 rounded-md ";
    const [className, setClassName] = useState(initialClass + props.className);

    useEffect(() => {
        setClassName(initialClass + props.className);
    },[props.className]);

    return (
        <button 
            {...props}
            className={className}
        >{props.children}</button>
    )
}