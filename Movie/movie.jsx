import React, { useEffect } from "react";
import { useState} from "react";
import { MovieCard } from "./movieCard";
import { Button } from "./SortButton";
import { Sceleton } from "./sceletonLis";

export const Movie=()=>{
const [movie,setMovie] = useState([]);              
const [inp,setIn] = useState('');
const [dat,setDat] = useState('');
const [rei,setRei] = useState('');
const [sortype,setSort] = useState('');
const [dark,setDark] = useState(false);
const [load,setLoad] = useState(true);


const TitleFilt=movie
.filter(el=>{
const filtT = el.title.toLowerCase().includes(inp.toLowerCase());
const filtD = el.release_date.startsWith(dat);
const filtR = el.vote_average >= Number(rei);
return filtD && filtT && filtR;
}); 

const AllSort=[...TitleFilt].sort((a,b)=>{
    if(sortype==="reint") return a.vote_average - b.vote_average;
    if(sortype==="title") return b.title.localeCompare(a.title);
    if(sortype==="dat") return new Date(b.release_date) - new Date(a.release_date);
    return 0;
})

const API = 'b7cbd1ed9f9ef0ba6909650e4f69a230';
const GetPopularMovies = async () =>{

    try{
const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`);
 if(!res.ok){
    throw new Error("not found this page");
 }
const data =await res.json();

setMovie(data.results);
    }
    catch(error){
        console.log(error);
    }
};

useEffect(()=>{
GetPopularMovies();
},[])

return(
    <div className={`${dark ? "bg-black text-white":"bg-white text-black"}`}>
    <button onClick={()=>setDark(prev => !prev)}
    className={`${dark ? "bg-white text-black":"bg-black text-white"} px-2 py-3 rounded-lg m-3`}    
    >{dark ? "Dark":"Light"}</button>
    <div className="grid">

<h1 className="text-center text-4xl m-2.5">Popular</h1>
<input className="border-amber-700 px-7.5 py-2 border-2 rounded-2xl mx-auto m-3" placeholder="Write you Title" type="text" value={inp} onChange={(e)=>setIn(e.target.value)}/>
<input className="border-amber-700 px-7.5 py-2 border-2 rounded-2xl mx-auto m-3" placeholder="Write you Date" type="text" value={dat} onChange={(e)=>setDat(e.target.value)}/>
<input className="border-amber-700 px-7.5 py-2 border-2 rounded-2xl mx-auto m-3" placeholder="Write you Rang" type="text" value={rei} onChange={(e)=>setRei(e.target.value)}/>

<Button
sortype={sortype}
setSort={setSort}
/>

 <div className="grid grid-cols-5 gap-2">
    {AllSort.map((el)=>(
        <MovieCard key={el.id}  movie={el} />
    ))}

  </div>
    </div>
    </div>
);
}