import React from "react";

export const Button=({setSort,sortype})=>{

    const buttons=[
        {type:"reint",label:"Сортировка по рейтингу"},
        {type:"dat",label:"Сортировка по дате"},
        {type:"title",label:"Сортировка по названию"},
        {type:"",label:"Сброс"}
        ];
    return(
        <div className="flex gap-3">

{buttons.map((btn)=>(
    <button onClick={()=>setSort(btn.type)}
    key={btn.type}
    className={`px-4 p-2 border rounded-4xl
    ${sortype=== btn.type ? "border-blue-500 bg-blue-500":"border-gray-500"}`}
    >{btn.label}</button>
))}
    </div>
    );
}