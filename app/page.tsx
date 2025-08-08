'use client'
import React, {useEffect, useState} from "react";
import {getFilms} from "@/lib/api";
import FilmSwiper from "@/app/components/FilmSwiper";

export default function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getFilms();
                console.log("Fetched films:",data);
                setFilms(data)
            }catch (e){
                console.error("Error fetching films:",e)
            }
        }
        fetchData();
    },[]);
  return (
      <main className="min-h-screen bg-black text-white p8 font-orbitron">
        <h1 className="text-3xl font-bold mb-6">Star Wars Films</h1>
          <FilmSwiper films={films} />
      </main>
  );
}
