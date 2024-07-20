// Sections/StreamSelection.tsx
import React, { useState } from "react";

const StreamSelection: React.FC = () => {
  const [stream, setStream] = useState("");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);

  const streams = [
    "Engineering",
    "Pharmacy",
    "11th",
    "12th",
    "10th",
    "Fashion",
    "Forensic",
    "BCS",
    "BCA",
    "MBA",
    "LLB",
  ];

  console.log(streams);

  const allSubjects = {
    Engineering: ["Computer Science", "Mechanical", "Civil"],
    Pharmacy: ["Pharmacology", "Pharmaceutical Chemistry", "Pharmacy Practice"],
    "11th": ["Mathematics", "Physics", "Chemistry", "Biology"],
    "12th": ["Mathematics", "Physics", "Chemistry", "Biology"],
    "10th": ["Mathematics", "Science", "Social Studies", "English"],
    Fashion: ["Fashion Design", "Textile Design", "Fashion Marketing"],
    Forensic: ["Forensic Biology", "Forensic Chemistry", "Forensic Psychology"],
    BCS: ["Data Structures", "Algorithms", "Database Management Systems"],
    BCA: ["Computer Programming", "Web Development", "Software Engineering"],
    MBA: [
      "Marketing Management",
      "Financial Management",
      "Human Resource Management",
    ],
    LLB: ["Constitutional Law", "Criminal Law", "Corporate Law"],
  };

  const handleStreamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStream(e.target.value);
    setSubjects(allSubjects[e.target.value]);
    setSubject("");
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg my-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Find Your Study Materials
      </h2>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Stream</label>
        <div className="relative">
          <select
            className="appearance-none w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={stream}
            onChange={handleStreamChange}
          >
            <option value="" disabled>
              Select Stream
            </option>
            {streams.map((stream) => (
              <option key={stream} value={stream}>
                {stream}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.23 7.23a.75.75 0 011.06-.02l3.996 4 3.996-4a.75.75 0 011.08 1.04l-4.5 4.5a.75.75 0 01-1.08 0l-4.5-4.5a.75.75 0 01-.02-1.06z" />
            </svg>
          </div>
        </div>
      </div>
      {stream && (
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Subject
          </label>
          <div className="relative">
            <select
              className="appearance-none w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={subject}
              onChange={handleSubjectChange}
            >
              <option value="" disabled>
                Select Subject
              </option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.23a.75.75 0 011.06-.02l3.996 4 3.996-4a.75.75 0 011.08 1.04l-4.5 4.5a.75.75 0 01-1.08 0l-4.5-4.5a.75.75 0 01-.02-1.06z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {subject && (
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Search Content
          </button>
        </div>
      )}
    </div>
  );
};

export default StreamSelection;
