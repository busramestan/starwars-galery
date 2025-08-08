'use client'

import React from "react";
import Link from "next/link";

type FilmCardProps =  {
    title: string;
    director: string
    opening_crawl: string
    episode_id: number
};
export default function FilmCard({title, director, episode_id}: FilmCardProps) {
    return (
        <Link href={`/films/${episode_id}`}>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-yellow-400">{director}</p>
        </div>
        </Link>
    )
}