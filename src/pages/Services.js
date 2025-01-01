

import React from 'react';
import image_ from '../assets/img/data handling problem.png'; // Update with your image path

const Services = () => {
  return (
    <div className="bg-[#DEEAFE] py-16"> {/* Applied custom background color */}
      <div className="min-h-screen pt-32 pb-16"> {/* Increased padding-top for mobile, to ensure space */}
        <div className="container mx-auto text-center px-6">
          {/* Header Section */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Our Project: Transforming the Way We Work</h2>
          <p className="text-xl text-gray-600 mb-12">
            Explore how our innovative features can help you tackle the most common challenges in data management and collaboration.
          </p>

          {/* Challenges and Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {/* Challenges Section */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-8 transition-all hover:shadow-2xl">
              <img src={image_} alt="Data Problems" className="w-64 h-auto rounded-md mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Challenges We Address</h3>
              <p className="text-gray-600 mb-6 text-justify">
                Our project tackles the core issues businesses face in managing data and collaborating effectively:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-justify">
                <li>Handling large and complex datasets</li>
                <li>Real-time collaboration across remote teams</li>
                <li>Extracting actionable insights from data</li>
                <li>Ensuring data security and privacy</li>
                <li>Improving user engagement with streamlined interfaces</li>
              </ul>
            </div>

            {/* Key Features Section */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-8 transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <p className="text-gray-600 mb-6">
                Our platform provides a suite of innovative features designed to enhance productivity and user experience:
              </p>
              <div className="space-y-6">
                {/* Feature 1 */}
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Real-Time Collaboration</h4>
                  <p className="text-gray-600">Work together seamlessly with live updates and instant feedback across teams.</p>
                </div>
                {/* Feature 2 */}
                <div>
                  <h4 className="text-xl font-semibold text-green-600 mb-2">Advanced Analytics</h4>
                  <p className="text-gray-600">Gain insights from your data and make better-informed decisions using powerful analytics tools.</p>
                </div>
                {/* Feature 3 */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-2">Personalized Recommendations</h4>
                  <p className="text-gray-600">Receive smart, AI-driven suggestions tailored to your unique needs and preferences.</p>
                </div>
                {/* Additional Feature */}
                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-2">Intelligent Automation</h4>
                  <p className="text-gray-600">Automate repetitive tasks to save time and focus on what matters most.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="container mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Streamlined Data Management</h4>
                <p className="text-gray-600 text-justify">
                  Simplify your workflows with better data accuracy and organization tools.
                </p>
              </div>
              {/* Solution 2 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl">
                <h4 className="text-xl font-semibold text-green-600 mb-4">Seamless Communication</h4>
                <p className="text-gray-600 text-justify">
                  Enjoy smooth collaboration with advanced communication tools for teams.
                </p>
              </div>
              {/* Solution 3 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl">
                <h4 className="text-xl font-semibold text-purple-600 mb-4">Intuitive Dashboards</h4>
                <p className="text-gray-600 text-justify">
                  Easily track progress and monitor key metrics using user-friendly dashboards.
                </p>
              </div>
              {/* Solution 4 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl">
                <h4 className="text-xl font-semibold text-orange-600 mb-4">Enterprise-Grade Security</h4>
                <p className="text-gray-600 text-justify">
                  Protect sensitive information with robust security measures.
                </p>
              </div>
              {/* Solution 5 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl">
                <h4 className="text-xl font-semibold text-red-600 mb-4">Enhanced User Experience</h4>
                <p className="text-gray-600 text-justify">
                  Benefit from an intuitive interface designed for ease of use.
                </p>
              </div>
              {/* Solution 6 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl">
                <h4 className="text-xl font-semibold text-teal-600 mb-4">Scalable Architecture</h4>
                <p className="text-gray-600 text-justify">
                  Build on a flexible and scalable platform designed for future growth.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
