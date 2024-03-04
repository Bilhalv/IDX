import React from "react";
import { Card } from "../../components/Card";
import { Project } from "../../data/constructors";
import { projects } from "../../data/tables";

const Home = () => {
  return (
    <>
      <body className="bg-purple-1 min-h-screen text-white">
        <header className="bg-purple-3 p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
          <p className="text-xl">Here are some of the technologies I have been working with:</p>
        </header>
        <div className="flex justify-center items-center h-1/2 flex-col gap-4 mt-4">
          {projects.map((project: Project, index: number) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </body>
    </>
  );
};

export default Home;
