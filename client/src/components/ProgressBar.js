import { useEffect, useState } from "react";

export default function ProgressBar() {
    const [progress, setProgress] = useState(5);
    
    useEffect(() => {
        const hello = setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 1200);
        return () => clearInterval(hello);
    }, []);
    
    return (
    <div className="relative pt-1">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div
                style={{width: `${progress}%`}}
                className="
          shadow-none
          transition-all
          duration-150
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-blue-500
        "
            ></div>
        </div>
    </div>)
}