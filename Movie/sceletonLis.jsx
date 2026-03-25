import React from "react";

export const Sceleton=({loading,setLoad})=>{
const sceletons = Array.from({legth: 10});

return(
    <div>
    {loading && (
        <div className="grid grid-cols-5 gap-2">
            {sceletons.map((_,i)=>(
                <div key={i} className="animate-pulse">
                   <div className="bg-gray-300 h-64 rounded-xl"></div>
                   <div className="bg-gray-300 h-4 mt-2 rounded"></div>
                   <div className="bg-gray-300 h-4 mt-1 w-1/2 rounded"></div>
                </div>
            ))}
        </div>
    )}
    </div>
);
}