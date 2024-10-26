// // Layout.js
// import React from "react";

// const Layout = ({ children }) => {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-gray-100 text-gray-800">
//       {/* Header Section */}
//       <header className="bg-pink-500 text-white py-4">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//           <h1 className="text-3xl font-bold mb-2 md:mb-0">Love Project</h1>
//           <nav>
//             <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
//               <li>
//                 <button
//                   onClick={() => scrollToSection("home")}
//                   className="hover:underline bg-transparent border-none text-white cursor-pointer"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("services")}
//                   className="hover:underline bg-transparent border-none text-white cursor-pointer"
//                 >
//                   Services
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("about")}
//                   className="hover:underline bg-transparent border-none text-white cursor-pointer"
//                 >
//                   About
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("admin")}
//                   className="hover:underline bg-transparent border-none text-white cursor-pointer"
//                 >
//                   Admin
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Main content area */}
//       <main>{children}</main>

//       {/* Footer */}
//       <footer className="bg-pink-500 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>© 2024 Love Project. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
