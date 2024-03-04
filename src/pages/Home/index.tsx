import React from "react";
import { Card } from "../../components/Card";
import { Project } from "../../data/constructors";
import { projects } from "../../data/tables";
import { Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <>
      <body className="bg-purple-1 min-h-screen text-white">
        <header className="bg-purple-3 p-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Explore My Portfolio</h1>
          <p className="text-xl text-center">Here are some projects I've been developing:</p>
        </header>
        <div className="flex justify-center items-center h-1/2 flex-col gap-4 mt-4">
          {projects.map((project: Project, index: number) => (
            <Card key={index} {...project} />
          ))}
        </div>
        <footer className="bg-purple-3 p-4 text-center mt-4 flex justify-center gap-4">
          <p className="flex items-center">© 2024 - Bilhalva</p>
          <a href="https://br.linkedin.com/in/pedrobilhalva" className="flex items-center hover:cursor-pointer hover:scale-110 transition-all"><Linkedin size={15} />&nbsp;LinkedIn</a>
          <a href="https://github.com/Bilhalv" className="flex items-center hover:cursor-pointer hover:scale-110 transition-all"><Github size={15} />&nbsp;GitHub</a>
        </footer>

      </body>
    </>
  );
};

export default Home;
