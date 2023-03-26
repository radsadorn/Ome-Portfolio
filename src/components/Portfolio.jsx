import React from "react";
import todona from "../assets/portfolio/todona.jpg";
import realTimeChat from "../assets/portfolio/realTimeChat.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      img: todona,
      title: "Todona",
      description:
        "A simple todo app that allows you to add, delete, and edit items.",
      github: "https://github.com/Todona",
      deployed: "https://todona.radsdorn.studio/",
    },
    {
      id: 2,
      img: realTimeChat,
      title: "Real Time Chat",
      description: "A chat app that allows you to send and receive messages.",
      github: "https://github.com/radsadorn/E2E-Encryption-Real_Time_Chat",
      deployed: "https://chat.radsdorn.studio/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ img, title, github, deployed }, index) => (
            <div
              key={index}
              className="text-center shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={img}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex w-full items-center justify-center">
                <a
                  href={deployed}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
