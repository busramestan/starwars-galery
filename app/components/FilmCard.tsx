'use client'

import React from "react";

type FilmCardProps =  {
    title: string;
    opening_crawl: string
};
export default function FilmCard({title, opening_crawl}: FilmCardProps) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-yellow-400">{opening_crawl}</p>
        </div>
    )
}