// content.tsx
import React from "react";

const Content: React.FC = () => {
  const data = [
    {
      title: "Notes",
      description: "Access a variety of notes for different subjects.",
    },
    {
      title: "Previous Year Question Papers",
      description: "Get past year question papers for exam preparation.",
    },
    {
      title: "Solved PYQs",
      description: "Find solutions to previous year question papers.",
    },
    {
      title: "Micros",
      description: "Explore micros for quick revision and learning.",
    },
  ];

  return (
    <div className="container mx-auto p-1">
      <h1 className="text-4xl font-bold mb-8">Educational Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
