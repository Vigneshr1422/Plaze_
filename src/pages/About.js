import React, { useState } from 'react';
import developerImage from '../assets/img/vignesh_standlike_hero.jpg'; // Update with your image path
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Removed FaFilePdf import

const About = () => {
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle download click
  const handleDownload = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false); // Hide message after 2 seconds
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12 pt-24 flex items-center justify-center" style={{ backgroundColor: '#DEEAFE' }}>
      <div className="container mx-auto px-4 lg:px-8 space-y-12">

        {/* About Us Header */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">About Us</h2>

        {/* Two-Column Layout: Left for About Developer, Right for Welcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left Section: About the Developer */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
            {/* Heading "About the Developer" */}
            <h3 className="text-3xl font-semibold text-purple-700 mb-6">About the Developer</h3>

            {/* Developer Image */}
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

            {/* About Developer Text */}
            <div className="text-center mt-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I’m Vignesh, the developer behind this project. With a background in web development and a 
                passion for crafting user-friendly applications, I strive to create solutions that are both 
                functional and engaging. I believe in continuous learning and improving, and I’m excited to share my 
                journey through this project.
              </p>
            </div>

            {/* Download Resume Section */}
            <section className="mt-8 text-center">
              <a 
                href="/Vignesh_R.pdf"  // Ensure the resume is in the public folder
                download
                onClick={handleDownload} // Handle download click
                className="text-blue-600 hover:text-blue-800"
              >
                <span className="text-lg">Download Resume</span>
              </a>

              {/* Pop-Up Message */}
              {showMessage && (
                <div className="mt-4 text-blue-600 font-semibold">
                  ❤️ Thank you for downloading my resume 🪄
                </div>
              )}
            </section>
          </section>

          {/* Right Section: Welcome to Our Project */}
          <section className="bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 text-center">Welcome to Our Project</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Welcome to our project, a space dedicated to innovation and connection. Our goal is to deliver 
              practical solutions that serve communities and drive positive change. We believe in the power of 
              technology to improve lives, and our project aims to bridge gaps in accessibility, communication, 
              and knowledge.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              In a world that is constantly evolving, we strive to stay ahead by using the latest technologies 
              to create cutting-edge solutions. Our team is committed to providing resources that can make a 
              lasting impact, whether through educational tools, innovative software, or community-driven initiatives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thank you for visiting, and we hope our work resonates with you. We invite you to join us in this 
              journey of growth and development as we continue to expand and improve our solutions. Stay tuned 
              for exciting updates, new features, and more ways to get involved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
