import { myShowCases } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-darkest-gray py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {myShowCases.map((project) => (
          <div
            key={project.id}
            className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-6 flex flex-col items-center"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={220}
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-light-gray-2 text-base mb-4 text-center">
              {project.description}
            </p>
            <Link
              href={project.link}
              target="_blank"
              className="text-blue-400 hover:underline font-semibold"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
