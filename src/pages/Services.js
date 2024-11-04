// Services.js
import React from 'react';
import image_ from '../assets/img/data handling problem.png'; // Update with your image path

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center py-12 pt-20"> {/* Added pt-20 */}
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Project Features</h2>
        <p className="text-xl md:text-2xl mb-8">Explore the innovative features that enhance user experience and drive impactful results.</p>
        
        {/* Existing Problems Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <img 
              src={image_} 
              alt="Illustration of problems" 
              className="rounded-lg shadow-md w-3/4 md:w-1/2 h-auto mx-auto" // Adjusted size classes
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Existing Problems</h3>
            <p className="text-gray-600 mb-4">
              Our project aims to address several existing challenges. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Difficulty in managing data and ensuring accuracy.</li>
              <li>Lack of real-time collaboration tools that foster team dynamics.</li>
              <li>Challenges in gaining actionable insights from data analytics.</li>
              <li>Insufficient security measures in traditional systems.</li>
              <li>Poor user experience and complicated interfaces.</li>
            </ul>
          </div>
        </div>

        {/* Innovative Features Section */}
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Innovative Features</h3>
        <div className="flex flex-col space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-semibold text-blue-700 mb-2">Real-Time Collaboration</h4>
            <p className="text-gray-600 mb-4">
              Connect and collaborate with others in real-time. Our project enables seamless interaction and teamwork, enhancing productivity and understanding.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-semibold text-green-700 mb-2">Data Analytics</h4>
            <p className="text-gray-600 mb-4">
              Leverage powerful data insights with our analytics feature, helping you make informed decisions and track key metrics effectively.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-semibold text-purple-700 mb-2">Personalized Recommendations</h4>
            <p className="text-gray-600">
              Our project provides personalized recommendations to enhance the user experience, tailoring suggestions based on individual preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
