'use client'

import React from "react";

type FilmCardProps =  {
    title: string;
    opening_crawl: string
};
export default function FilmCard({title, opening_crawl}: FilmCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md max-w-sm p-4 border hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2 text-amber-700" >{title}</h2>
            <p className="text-gray-600">{opening_crawl}</p>
        </div>
    )
}