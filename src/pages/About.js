
import React from 'react';
// Replace with your image path
import developerImage from '../assets/img/vignesh_standlike_hero.jpg'; // Update with your image path
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn and GitHub icons

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24 flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 space-y-12">

        {/* About Us Header */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">About Us</h2>

        {/* Grid Layout for Welcome and Mission Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 text-center">Welcome to Our Project</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to our project, a space dedicated to innovation and connection. Our goal is to deliver 
              practical solutions that serve communities and drive positive change.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-green-700 mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to fostering growth, encouraging understanding, and leveraging technology to 
              bridge gaps. Our mission is to empower individuals and organizations with tools that make a 
              meaningful impact in their daily lives.
            </p>
          </section>
        </div>

        {/* About the Developer Section */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-md p-8 max-w-3xl mx-auto mt-12 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
          <img 
            src={developerImage} 
            alt="Developer" 
            className="w-32 h-32 rounded-full mb-4"
          />
          
          {/* Icons for LinkedIn and GitHub */}
          <div className="flex space-x-4 mt-2">
            <a 
              href="https://www.linkedin.com/in/vignesh-r-793931252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href="https://github.com/Vigneshr1422" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600"
            >
              <FaGithub size={32} />
            </a>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-3xl font-semibold text-purple-700 mb-4">About the Developer</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I’m Vignesh, the developer behind this project. With a background in web development and a 
              passion for crafting user-friendly applications, I strive to create solutions that are both 
              functional and engaging.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
