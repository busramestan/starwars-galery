'use client'
import FilmCard from "@/app/components/FilmCard";
import React, {useEffect, useState} from "react";
import {getFilms} from "@/lib/api";

type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
}

export default function Home() {
    const [films, setFilms] = useState<Film[]>([]);

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
      <main className={"min-h-screen bg-black text-white p8"}>
        <h1 className="text-3xl font-bold mb-6">Star Wars Films</h1>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {films.map((film) => (
                  <li key={film.episode_id} className="mb-4">
                      <FilmCard title={film.title} opening_crawl={film.opening_crawl}/>
                  </li>
              ))}
          </ul>
      </main>

  );
}
