import React from 'react';
import image_ from '../assets/img/data handling problem.png'; // Update with your image path

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16"> {/* Increased padding-top for mobile, to ensure space */}
    <div className="container mx-auto text-center px-6">
      {/* Header Section */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Our Project: Transforming the Way We Work</h2>
      <p className="text-xl text-gray-600 mb-12">
        Explore how our innovative features can help you tackle the most common challenges in data management and collaboration.
      </p>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* Problem Section */}
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

          {/* Feature Section */}
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
            </div>
          </div>

          {/* Solutions Section */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-8 transition-all hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Solutions</h3>
            <p className="text-gray-600 mb-6 text-justify">
              We provide actionable solutions for the challenges you face, all while ensuring smooth integration with your existing workflows.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-justify">
              <li>Streamlined data management for better accuracy</li>
              <li>Seamless communication tools for improved collaboration</li>
              <li>Easy-to-use dashboards for tracking progress and key metrics</li>
              <li>Enterprise-grade security features to protect sensitive data</li>
              <li>Intuitive interface design for a better user experience</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
