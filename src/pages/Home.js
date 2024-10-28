// import React from "react";
// import { Link } from 'react-router-dom';
// import HeaderFooter from './HeaderFooter'; // Importing the HeaderFooter component

// import image from "../assets/img/College with Flowers with Air in natural.png"; // Adjust the path as necessary
// import service1Image from '../assets/img/generate.png';
// import service2Image from '../assets/img/view.png';
// import service3Image from '../assets/img/freepik__candid-image-photography-natural-textures-highly-r__85324.jpeg';

// const Home = () => {
//   return (
//     <div className="bg-gray-100 text-gray-800">
//       {/* Header Section with Fixed Navbar */}
//       <header className="bg-pink-500 text-white py-4 fixed w-full top-0 left-0 z-50 shadow-md">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//           <h1 className="text-3xl font-bold mb-2 md:mb-0">I'm Scared 🔥</h1>
//           <nav>
//             <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
//               <li>
//                 <a
//                   href="#home"
//                   className="no-underline text-xl md:text-2xl transition-transform duration-300 hover:transform hover:-translate-x-2 cursor-pointer"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#services"
//                   className="no-underline text-xl md:text-2xl transition-transform duration-300 hover:transform hover:-translate-x-2 cursor-pointer"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#about"
//                   className="no-underline text-xl md:text-2xl transition-transform duration-300 hover:transform hover:-translate-x-2 cursor-pointer"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#admin"
//                   className="no-underline text-xl md:text-2xl transition-transform duration-300 hover:transform hover:-translate-x-2 cursor-pointer"
//                 >
//                   Admin
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Add margin-top to account for the fixed navbar height */}
//       <div className="pt-20"> {/* Adjust padding-top for fixed header */}
    
//         {/* Home Section */}
//         <section id="home" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
//           <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//             {/* Text Section */}
//             <div className="text-center md:text-left md:w-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Love Project</h2>
//               <p className="text-xl md:text-2xl mb-6">Building connections, nurturing relationships.</p>
//               {/* Get Started Button */}
//               <Link 
//   to="/login" // Update this to your login page path
//   className="inline-block px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
// >
//   Get Started
// </Link>
//             </div>

//             {/* Image Section */}
//             <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//               <img
//                 src={image}  // Use the imported image here
//                 alt="Love Project"
//                 className="w-full max-w-xs md:max-w-md"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="min-h-screen flex items-center justify-center bg-gray-200 scroll-mt-20">
//           <div className="container mx-auto text-center px-4">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
//             <p className="text-xl md:text-2xl mb-8">We provide solutions for enhancing love and understanding.</p>

//             {/* 3 Service Containers */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Service 1 */}
//               <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={service1Image}  // Use the imported image here
//                   alt="Service 1"
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">Service 1</h3>
//                   <p className="text-gray-600">Description of the first service we offer.</p>
//                 </div>
//               </div>

//               {/* Service 2 */}
//               <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={service2Image}  // Use the imported image here
//                   alt="Service 2"
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">Service 2</h3>
//                   <p className="text-gray-600">Description of the second service we offer.</p>
//                 </div>
//               </div>

//               {/* Service 3 */}
//               <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={service3Image}  // Use the imported image here
//                   alt="Service 3"
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">Service 3</h3>
//                   <p className="text-gray-600">Description of the third service we offer.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
//           <div className="text-center px-4">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
//             <p className="text-xl md:text-2xl">Our mission is to help people foster loving relationships.</p>
//           </div>
//         </section>

//       </div>

//       {/* Footer */}
//       <footer className="bg-pink-500 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>© 2024 Love Project. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// /*


// PS D:\reactjs\myapp> git init
// Reinitialized existing Git repository in D:/reactjs/myapp/.git/
// PS D:\reactjs\myapp> git add .
// PS D:\reactjs\myapp> git commit -m "First Commit"
// [main 14bbc25] First Commit
//  38 files changed, 5616 insertions(+), 561 deletions(-)
//  create mode 100644 postcss.config.js
//  create mode 100644 src/Apppp.css
//  create mode 100644 src/Layout.js
//  create mode 100644 src/assets/favicon.ico
//  create mode 100644 src/assets/img/College with Flowers with Air in natural.png
//  create mode 100644 src/assets/img/VID-20230318-WA0299.mp4
//  create mode 100644 src/assets/img/app-store-badge.svg
//  create mode 100644 src/assets/img/freepik__candid-image-photography-natural-textures-highly-r__85324.jpeg
//  create mode 100644 src/assets/img/generate.png
//  create mode 100644 src/assets/img/google-play-badge.svg
//  create mode 100644 src/assets/img/portrait_black.png
//  create mode 100644 src/assets/img/tnw-logo.svg
//  create mode 100644 src/assets/img/view.png
//  create mode 100644 src/context/AuthContext.js
//  create mode 100644 src/index.css
//  create mode 100644 src/index.html
//  create mode 100644 src/pages/Footer.js
//  create mode 100644 src/pages/HeaderFooter.js
//  create mode 100644 src/pages/Home.js
//  create mode 100644 src/pages/Navbar.js
//  create mode 100644 src/pages/PdfGenerator.js
//  create mode 100644 src/pages/StudentEntryForm.js
//  create mode 100644 src/pages/StudentList.js
//  create mode 100644 src/services/StudentService.js
//  create mode 100644 src/services/firebase.js
//  create mode 100644 src/utils/scrollUtils.js
// PS D:\reactjs\myapp> git branch -M main
// PS D:\reactjs\myapp> git remote add origin https://github.com/Vigneshr1422/Plaze_.git
// error: remote origin already exists.
// PS D:\reactjs\myapp> git branch -M main     
// PS D:\reactjs\myapp> git remote add origin https://github.com/Vigneshr1422/Plaze_.git
// error: remote origin already exists.
// PS D:\reactjs\myapp> git remote add origin1 https://github.com/Vigneshr1422/Plaze_.git 
// PS D:\reactjs\myapp> git push -u origin1 main 
// Enumerating objects: 91, done.
// Counting objects: 100% (91/91), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (88/88), done.
// Writing objects: 100% (91/91), 8.77 MiB | 108.00 KiB/s, done.
// Total 91 (delta 17), reused 0 (delta 0), pack-reused 0 (from 0)
// remote: Resolving deltas: 100% (17/17), done.
// To https://github.com/Vigneshr1422/Plaze_.git
//  * [new branch]      main -> main
// branch 'main' set up to track 'origin1/main'.
// PS D:\reactjs\myapp> git add .                                                         
// PS D:\reactjs\myapp> git commit -m "route "                                            
// [main abaa2f5] route
//  1 file changed, 4 insertions(+)
//  create mode 100644 netlify.toml
// PS D:\reactjs\myapp> git push                
// Enumerating objects: 4, done.
// Counting objects: 100% (4/4), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (3/3), done.
// Writing objects: 100% (3/3), 323 bytes | 161.00 KiB/s, done.
// Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
// remote: Resolving deltas: 100% (1/1), completed with 1 local object.
// To https://github.com/Vigneshr1422/Plaze_.git
//    14bbc25..abaa2f5  main -> main
// PS D:\reactjs\myapp> git add .
// PS D:\reactjs\myapp> git commit -m "login - connect " 
// [main 8c38550] login - connect
//  1 file changed, 8 insertions(+), 6 deletions(-)
// PS D:\reactjs\myapp> git push
// Enumerating objects: 9, done.
// Counting objects: 100% (9/9), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (5/5), done.
// Writing objects: 100% (5/5), 542 bytes | 271.00 KiB/s, done.
// Total 5 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
// remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
// To https://github.com/Vigneshr1422/Plaze_.git
//    abaa2f5..8c38550  main -> main
// PS D:\reactjs\myapp>




























// */

// import React from "react";
// import { Link } from 'react-router-dom';
// import HeaderFooter from './HeaderFooter'; // Adjust the import path as necessary

// import image from "../assets/img/College with Flowers with Air in natural.png"; // Adjust the path as necessary
// import service1Image from '../assets/img/generate.png';
// import service2Image from '../assets/img/view.png';
// import service3Image from '../assets/img/freepik__candid-image-photography-natural-textures-highly-r__85324.jpeg';

// const Home = () => {
//   return (
//     <div className="bg-gray-100 text-gray-800">
//       {/* Header Section with Fixed Navbar */}
//       <HeaderFooter /> {/* Include HeaderFooter here */}

//       {/* Add margin-top to account for the fixed navbar height */}
//       <div className="pt-20"> {/* Adjust padding-top for fixed header */}
    
//         {/* Home Section */}
//         <section id="home" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
//           <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//             {/* Text Section */}
//             <div className="text-center md:text-left md:w-1/2">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">🤹‍♂️🎪Welcome to the Placement Co-ordination App 🎪🤹‍♂️</h2>
//               <p className="text-xl md:text-2xl mb-6">Building connections, nurturing relationships.</p>
//               {/* Get Started Button */}
//               <Link 
//                 to="/login" // Update this to your login page path
//                 className="inline-block px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* Image Section */}
//             <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//               <img
//                 src={image}  // Use the imported image here
//                 alt="Love Project"
//                 className="w-full max-w-xs md:max-w-md"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="min-h-screen flex items-center justify-center bg-gray-200 scroll-mt-20">
//           <div className="container mx-auto text-center px-4">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
//             <p className="text-xl md:text-2xl mb-8">We provide solutions for enhancing love and understanding.</p>

//             {/* 3 Service Containers */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Service 1 */}
//               <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={service1Image}  // Use the imported image here
//                   alt="Service 1"
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">Service 1</h3>
//                   <p className="text-gray-600">Description of the first service we offer.</p>
//                 </div>
//               </div>

//               {/* Service 2 */}
//               <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={service2Image}  // Use the imported image here
//                   alt="Service 2"
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">Service 2</h3>
//                   <p className="text-gray-600">Description of the second service we offer.</p>
//                 </div>
//               </div>

//               {/* Service 3 */}
//               <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={service3Image}  // Use the imported image here
//                   alt="Service 3"
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2xl font-bold mb-2">Service 3</h3>
//                   <p className="text-gray-600">Description of the third service we offer.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
//           <div className="text-center px-4">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
//             <p className="text-xl md:text-2xl">Our mission is to help people foster loving relationships.</p>
//           </div>
//         </section>

//       </div>

//       {/* Footer */}
//       <footer className="bg-pink-500 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>© 2024 Plaze . . .All Rights Reserved..</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;







import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/img/College with Flowers with Air in natural.png'; // Update with your image path
import HeaderFooter from './HeaderFooter'; // Make sure to import your HeaderFooter component

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HeaderFooter /> {/* Include HeaderFooter here */}

      <div className="pt-20"> {/* Adjust padding-top for fixed header */}

        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">🤹‍♂️🎪Welcome to the Placement Co-ordination App 🎪🤹‍♂️</h2>
              <p className="text-xl md:text-2xl mb-6">Building connections, nurturing relationships.</p>
              <Link to="/login" className="inline-block px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition duration-300">
                Get Started
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img src={image} alt="Love Project" className="w-full max-w-xs md:max-w-md" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center bg-gray-200 scroll-mt-20">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl md:text-2xl mb-8">We provide solutions for enhancing love and understanding.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Your service cards here */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <p className="text-xl md:text-2xl">Our mission is to help people foster loving relationships.</p>
          </div>
        </section>

      </div>

      <footer className="bg-pink-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Plaze . . .All Rights Reserved..</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
