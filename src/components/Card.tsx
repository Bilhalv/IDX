import React from 'react';
import { Project } from '../data/constructors';

export function Card(props: Project) {
    return (
        <div className="bg-purple-2 rounded-lg shadow-lg p-4 w-1/2">
            <h2 className="text-xl font-semibold text-center">{props.title}</h2>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.img} alt={props.title} className="w-full h-48 object-fit rounded-lg my-2" />
            </a>
            <p className="italic">&nbsp;&nbsp;&nbsp;&nbsp;{props.desc}</p>
        </div>
    );
} 