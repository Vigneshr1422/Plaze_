// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/img/i.png'; // Update with your image path
import HeaderFooter from './HeaderFooter'; // Import your HeaderFooter component
import ReadyToGetStarted from './ReadyToGetStarted'; // Import the new component

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HeaderFooter /> {/* Include HeaderFooter here */}
      <div className="pt-20"> {/* Adjust padding-top for fixed header */}
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">📈🌟 Welcome to the Placement Co-ordination App 🌟📈

</h2>
              <p className="text-xl md:text-2xl mb-6">Building connections, nurturing relationships.</p>
              <Link 
  to="/login" 
  className="inline-block px-6 py-3 bg-[#1320ea] text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition duration-300">
  Get Started
</Link>

            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img src={image} alt="Love Project" className="w-full max-w-xs md:max-w-md" />
            </div>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
{/* Why Choose Our Platform Section */}
<div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
      Why Choose Our Platform?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 3a6 6 0 018.5 5.25c0 5.75-4.5 10.25-8.5 13.25-4-3-8.5-7.5-8.5-13.25A6 6 0 019.75 3z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          User-Friendly Interface
        </h3>
        <p className="text-gray-600 text-center">
          Our platform offers an intuitive interface that makes it easy for users to navigate and access features seamlessly.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v18h14V3H5zm2 2h10v14H7V5z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Secure and Reliable
        </h3>
        <p className="text-gray-600 text-center">
          We ensure your data is safe with advanced security protocols, and our platform runs with high reliability.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          24/7 Customer Support
        </h3>
        <p className="text-gray-600 text-center">
          Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 2a2 2 0 00-2 2v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-3V4a2 2 0 00-2-2h-4z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Avoid Data Redundancy
        </h3>
        <p className="text-gray-600 text-center">
          Minimize data duplication and ensure consistency across all records with our smart data management features.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h4l3-3m0 0l3 3m-3-3v12m-7-6h14"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Real-Time Views
        </h3>
        <p className="text-gray-600 text-center">
          Get instant access to data updates and live views for improved decision-making and efficiency.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 8v8M8 8v8m-4 4h16M4 4h16"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Excel-Based Reports
        </h3>
        <p className="text-gray-600 text-center">
          Export detailed reports in Excel format for analysis, sharing, and storage.
        </p>
      </div>

      {/* Card 7 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Visual Insights
        </h3>
        <p className="text-gray-600 text-center">
          Leverage pie chart visualizations to gain a quick and clear understanding of placement trends.
        </p>
      </div>

      {/* Card 8 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-indigo-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Collaboration Tools
        </h3>
        <p className="text-gray-600 text-center">
          Collaborate effectively with teammates and manage projects seamlessly.
        </p>
      </div>

      {/* Card 9 */}
      <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-pink-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2a10 10 0 110 20 10 10 0 010-20z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          Scalable Architecture
        </h3>
        <p className="text-gray-600 text-center">
          Our platform is designed to scale as your needs grow, handling increasing traffic and data.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Ready to Get Started Section */}
        <ReadyToGetStarted /> {/* Add the new component here */}

      </div>
      <footer className="bg-[#6766f5] text-white py-4">
            <div className="container mx-auto text-center">
                <p>© 2024 Plaze . . . All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
};

export default Home;
