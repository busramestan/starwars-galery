import {getFilms} from "@/lib/api";
import {notFound} from "next/navigation";

export default async function FilmDetail({params} :{params: {id: string}}){
    const films =await getFilms();
    const film = films.find((f: any) => f.episode_id.toString() ===params.id)
    if(!film){
        notFound()
    }
    return(
        <div className="min-h-screen bg-indigo-500 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Film: {film.title}</h1>
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Director: {film.director}</h3>
            <p className="text-lg">{film.opening_crawl}</p>
        </div>
    )
}