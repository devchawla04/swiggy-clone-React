import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl text-center">
          <img
            src="https://ucarecdn.com/8823b484-631d-4ed4-9b30-882a42590f46/-/preview/800x800/"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Dev Chawla</h1>
          <p className="text-gray-600 mt-2">
            Passionate developer 🚀 | JavaScript & TypeScript Enthusiast | React
            & C# .NET Developer
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-6 text-gray-700">
            I'm a software developer passionate about building scalable
            applications and exploring new technologies. Let's connect and
            create something amazing!
          </p>
        </div>
      </div>
    </>
  );
}