
// import React, { useEffect, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import Header from './HeaderFooter';
// import Footer from './Footer';
// const StudentList = () => {
//   const { user } = useAuthContext();
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [criteria, setCriteria] = useState({
//     tenth: '',
//     twelfth: '',
//     ug: '',
//     pg: '',
//   });
//   const [pdfInfo, setPdfInfo] = useState({
//     companyName: '',
//     date: '',
//     venue: '',
//     role: '',
//   });

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) return;

//       try {
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setStudents(studentsData);
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCriteria({ ...criteria, [name]: value });
//   };

//   const handlePdfInfoChange = (e) => {
//     const { name, value } = e.target;
//     setPdfInfo({ ...pdfInfo, [name]: value });
//   };

//   const filterStudents = () => {
//     const { tenth, twelfth, ug, pg } = criteria;
//     const filtered = students.filter((student) =>
//       (tenth ? student.tenth >= Number(tenth) : true) &&
//       (twelfth ? student.twelfth >= Number(twelfth) : true) &&
//       (ug ? student.ug >= Number(ug) : true) &&
//       (pg ? student.pg >= Number(pg) : true)
//     );
//     setFilteredStudents(filtered);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF('landscape');
//     doc.setFontSize(22);
//     doc.text('Filtered Student List', 20, 20);

//     if (pdfInfo.companyName) doc.text(`Company: ${pdfInfo.companyName}`, 20, 30);
//     if (pdfInfo.date) doc.text(`Date: ${pdfInfo.date}`, 120, 30);
//     if (pdfInfo.venue) doc.text(`Venue: ${pdfInfo.venue}`, 20, 40);
//     if (pdfInfo.role) doc.text(`Role: ${pdfInfo.role}`, 120, 40);

//     // Define table header
//     let startY = 60;
//     doc.setFontSize(16);
//     doc.text('Name', 20, startY);
//     doc.text('10th', 80, startY);
//     doc.text('12th', 120, startY);
//     doc.text('UG', 160, startY);
//     doc.text('PG', 200, startY);
//     doc.text('Skills', 240, startY);

//     // Draw line under headers
//     doc.line(20, startY + 2, 280, startY + 2);
//     startY += 10;

//     // Populate table rows
//     if (filteredStudents.length === 0) {
//       doc.text('No students meet the criteria.', 20, startY);
//     } else {
//       filteredStudents.forEach((student, index) => {
//         const rowY = startY + index * 10;
//         doc.setFontSize(12);
//         doc.text(student.name, 20, rowY);
//         doc.text(String(student.tenth), 80, rowY);
//         doc.text(String(student.twelfth), 120, rowY);
//         doc.text(String(student.ug), 160, rowY);
//         doc.text(String(student.pg), 200, rowY);
//         doc.text(student.skillSet, 240, rowY);
//       });
//     }

//     doc.save('filtered_students.pdf');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-200"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-400"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
//       <Header />

//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           <div className="flex flex-wrap mb-4 gap-4">
//             <input
//               type="number"
//               name="tenth"
//               value={criteria.tenth}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Min 10th Grade"
//             />
//             <input
//               type="number"
//               name="twelfth"
//               value={criteria.twelfth}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Min 12th Grade"
//             />
//             <input
//               type="number"
//               name="ug"
//               value={criteria.ug}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Min UG Grade"
//             />
//             <input
//               type="number"
//               name="pg"
//               value={criteria.pg}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//               placeholder="Min PG Grade"
//             />
//             <button
//               onClick={filterStudents}
//               className="bg-blue-600 text-white py-2 px-4 rounded-lg"
//             >
//               Filter Students
//             </button>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               name="companyName"
//               value={pdfInfo.companyName}
//               onChange={handlePdfInfoChange}
//               className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
//               placeholder="Company Name"
//             />
//             <input
//               type="date"
//               name="date"
//               value={pdfInfo.date}
//               onChange={handlePdfInfoChange}
//               className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
//             />
//             <input
//               type="text"
//               name="venue"
//               value={pdfInfo.venue}
//               onChange={handlePdfInfoChange}
//               className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
//               placeholder="Venue"
//             />
//             <input
//               type="text"
//               name="role"
//               value={pdfInfo.role}
//               onChange={handlePdfInfoChange}
//               className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
//               placeholder="Role"
//             />
//             <button
//               onClick={generatePDF}
//               className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
//             >
//               Generate PDF
//             </button>
//           </div>

//           {filteredStudents.length > 0 && (
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-600 text-left text-sm uppercase tracking-wider">
//                   <th className="border border-gray-200 px-4 py-2">Name</th>
//                   <th className="border border-gray-200 px-4 py-2">10th</th>
//                   <th className="border border-gray-200 px-4 py-2">12th</th>
//                   <th className="border border-gray-200 px-4 py-2">UG</th>
//                   <th className="border border-gray-200 px-4 py-2">PG</th>
//                   <th className="border border-gray-200 px-4 py-2">Skills</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredStudents.map((student) => (
//                   <tr key={student.id}>
//                     <td className="border border-gray-200 px-4 py-2">{student.name}</td>
//                     <td className="border border-gray-200 px-4 py-2">{student.tenth}</td>
//                     <td className="border border-gray-200 px-4 py-2">{student.twelfth}</td>
//                     <td className="border border-gray-200 px-4 py-2">{student.ug}</td>
//                     <td className="border border-gray-200 px-4 py-2">{student.pg}</td>
//                     <td className="border border-gray-200 px-4 py-2">{student.skillSet}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };
//  export default StudentList;
//og

// import React, { useEffect, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import Header from './HeaderFooter';
// import Footer from './Footer';
// import logoImage from '../assets/img/Vignesh R Logo For Study Purpose.png'; // Update with the correct path

// const StudentList = () => {
//   const { user } = useAuthContext();
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [criteria, setCriteria] = useState({
//     tenth: '',
//     twelfth: '',
//     ug: '',
//     pg: '',
//   });
//   const [pdfInfo, setPdfInfo] = useState({
//     companyName: '',
//     date: '',
//     venue: '',
//     role: '',
//   });

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) return;

//       try {
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setStudents(studentsData);
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCriteria({ ...criteria, [name]: value });
//   };

//   const handlePdfInfoChange = (e) => {
//     const { name, value } = e.target;
//     setPdfInfo({ ...pdfInfo, [name]: value });
//   };

//   const filterStudents = () => {
//     const { tenth, twelfth, ug, pg } = criteria;
//     const filtered = students.filter((student) =>
//       (tenth ? student.tenth >= Number(tenth) : true) &&
//       (twelfth ? student.twelfth >= Number(twelfth) : true) &&
//       (ug ? student.ug >= Number(ug) : true) &&
//       (pg ? student.pg >= Number(pg) : true)
//     );
//     setFilteredStudents(filtered);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF('landscape');
//     doc.setFontSize(22);
//     doc.text('Filtered Student List', 20, 20);

//     // Add the logo to the top-right corner
//     const logoWidth = 30;
//     const logoHeight = 15;
//     const pageWidth = doc.internal.pageSize.getWidth();
//     doc.addImage(logoImage, 'PNG', pageWidth - logoWidth - 10, 10, logoWidth, logoHeight);

//     // Display PDF information
//     if (pdfInfo.companyName) doc.text(`Company: ${pdfInfo.companyName}`, 20, 30);
//     if (pdfInfo.date) doc.text(`Date: ${pdfInfo.date}`, 120, 30);
//     if (pdfInfo.venue) doc.text(`Venue: ${pdfInfo.venue}`, 20, 40);
//     if (pdfInfo.role) doc.text(`Role: ${pdfInfo.role}`, 120, 40);

//     // Define table header
//     let startY = 60;
//     doc.setFontSize(16);
//     doc.text('Name', 20, startY);
//     doc.text('10th', 80, startY);
//     doc.text('12th', 120, startY);
//     doc.text('UG', 160, startY);
//     doc.text('PG', 200, startY);
//     doc.text('Skills', 240, startY);

//     // Draw line under headers
//     doc.line(20, startY + 2, 280, startY + 2);
//     startY += 10;

//     // Populate table rows
//     if (filteredStudents.length === 0) {
//       doc.text('No students meet the criteria.', 20, startY);
//     } else {
//       filteredStudents.forEach((student, index) => {
//         const rowY = startY + index * 10;
//         doc.setFontSize(12);
//         doc.text(student.name, 20, rowY);
//         doc.text(String(student.tenth), 80, rowY);
//         doc.text(String(student.twelfth), 120, rowY);
//         doc.text(String(student.ug), 160, rowY);
//         doc.text(String(student.pg), 200, rowY);
//         doc.text(student.skillSet, 240, rowY);
//       });
//     }

//     doc.save('filtered_students.pdf');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-200"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-400"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
//       <Header />

//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           {/* Responsive Filter Section */}
//           <div className="flex flex-wrap mb-4 gap-4">
//             <input
//               type="number"
//               name="tenth"
//               value={criteria.tenth}
//               onChange={handleInputChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Min 10th Grade"
//             />
//             <input
//               type="number"
//               name="twelfth"
//               value={criteria.twelfth}
//               onChange={handleInputChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Min 12th Grade"
//             />
//             <input
//               type="number"
//               name="ug"
//               value={criteria.ug}
//               onChange={handleInputChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Min UG Grade"
//             />
//             <input
//               type="number"
//               name="pg"
//               value={criteria.pg}
//               onChange={handleInputChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Min PG Grade"
//             />
//             <button
//               onClick={filterStudents}
//               className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg"
//             >
//               Filter Students
//             </button>
//           </div>

//           {/* Responsive PDF Information Section */}
//           <div className="flex flex-wrap gap-4 mb-4">
//             <input
//               type="text"
//               name="companyName"
//               value={pdfInfo.companyName}
//               onChange={handlePdfInfoChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Company Name"
//             />
//             <input
//               type="date"
//               name="date"
//               value={pdfInfo.date}
//               onChange={handlePdfInfoChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//             />
//             <input
//               type="text"
//               name="venue"
//               value={pdfInfo.venue}
//               onChange={handlePdfInfoChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Venue"
//             />
//             <input
//               type="text"
//               name="role"
//               value={pdfInfo.role}
//               onChange={handlePdfInfoChange}
//               className="w-full sm:w-1/4 border border-gray-300 rounded-lg p-2"
//               placeholder="Role"
//             />
//             <button
//               onClick={generatePDF}
//               className="w-full sm:w-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
//             >
//               Generate PDF
//             </button>
//           </div>

//           {/* Student List Table */}
//           {filteredStudents.length > 0 && (
//             <table className="w-full border border-collapse border-gray-300">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 bg-gray-100 font-bold text-xs text-gray-600 border">Name</th>
//                   <th className="py-2 px-4 bg-gray-100 font-bold text-xs text-gray-600 border">10th</th>
//                   <th className="py-2 px-4 bg-gray-100 font-bold text-xs text-gray-600 border">12th</th>
//                   <th className="py-2 px-4 bg-gray-100 font-bold text-xs text-gray-600 border">UG</th>
//                   <th className="py-2 px-4 bg-gray-100 font-bold text-xs text-gray-600 border">PG</th>
//                   <th className="py-2 px-4 bg-gray-100 font-bold text-xs text-gray-600 border">Skills</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredStudents.map((student) => (
//                   <tr key={student.id}>
//                     <td className="py-2 px-4 border">{student.name}</td>
//                     <td className="py-2 px-4 border">{student.tenth}</td>
//                     <td className="py-2 px-4 border">{student.twelfth}</td>
//                     <td className="py-2 px-4 border">{student.ug}</td>
//                     <td className="py-2 px-4 border">{student.pg}</td>
//                     <td className="py-2 px-4 border">{student.skillSet}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default StudentList;

import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import Header from './HeaderFooter';
import Footer from './Footer';

const StudentList = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [criteria, setCriteria] = useState({
    tenth: '',
    twelfth: '',
    ug: '',
    pg: '',
  });
  const [pdfInfo, setPdfInfo] = useState({
    companyName: '',
    date: '',
    venue: '',
    role: '',
  });

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user) return;

      try {
        const q = query(collection(db, 'students'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setStudents(studentsData);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handlePdfInfoChange = (e) => {
    const { name, value } = e.target;
    setPdfInfo({ ...pdfInfo, [name]: value });
  };

  const filterStudents = () => {
    const { tenth, twelfth, ug, pg } = criteria;
    const filtered = students.filter((student) =>
      (tenth ? student.tenth >= Number(tenth) : true) &&
      (twelfth ? student.twelfth >= Number(twelfth) : true) &&
      (ug ? student.ug >= Number(ug) : true) &&
      (pg ? student.pg >= Number(pg) : true)
    );
    setFilteredStudents(filtered);
  };

  const generatePDF = () => {
    const doc = new jsPDF('landscape');
    doc.setFontSize(22);
    doc.text('Filtered Student List', 20, 20);

    if (pdfInfo.companyName) doc.text(`Company: ${pdfInfo.companyName}`, 20, 30);
    if (pdfInfo.date) doc.text(`Date: ${pdfInfo.date}`, 120, 30);
    if (pdfInfo.venue) doc.text(`Venue: ${pdfInfo.venue}`, 20, 40);
    if (pdfInfo.role) doc.text(`Role: ${pdfInfo.role}`, 120, 40);

    // Define table header
    let startY = 60;
    doc.setFontSize(16);
    doc.text('Name', 20, startY);
    doc.text('10th', 80, startY);
    doc.text('12th', 120, startY);
    doc.text('UG', 160, startY);
    doc.text('PG', 200, startY);
    doc.text('Skills', 240, startY);

    // Draw line under headers
    doc.line(20, startY + 2, 280, startY + 2);
    startY += 10;

    // Populate table rows
    if (filteredStudents.length === 0) {
      doc.text('No students meet the criteria.', 20, startY);
    } else {
      filteredStudents.forEach((student, index) => {
        const rowY = startY + index * 10;
        doc.setFontSize(12);
        doc.text(student.name, 20, rowY);
        doc.text(String(student.tenth), 80, rowY);
        doc.text(String(student.twelfth), 120, rowY);
        doc.text(String(student.ug), 160, rowY);
        doc.text(String(student.pg), 200, rowY);
        doc.text(student.skillSet, 240, rowY);
      });
    }

    doc.save('filtered_students.pdf');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-200"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
      <Header />

      <main className="flex-grow bg-gray-100 p-6 mt-24">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Back
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

          <div className="flex flex-col sm:flex-row mb-4 gap-4">
            <input
              type="number"
              name="tenth"
              value={criteria.tenth}
              onChange={handleInputChange}
              className="mt-1 block w-full sm:w-auto border border-gray-300 rounded-lg p-2"
              placeholder="Min 10th Grade"
            />
            <input
              type="number"
              name="twelfth"
              value={criteria.twelfth}
              onChange={handleInputChange}
              className="mt-1 block w-full sm:w-auto border border-gray-300 rounded-lg p-2"
              placeholder="Min 12th Grade"
            />
            <input
              type="number"
              name="ug"
              value={criteria.ug}
              onChange={handleInputChange}
              className="mt-1 block w-full sm:w-auto border border-gray-300 rounded-lg p-2"
              placeholder="Min UG Grade"
            />
            <input
              type="number"
              name="pg"
              value={criteria.pg}
              onChange={handleInputChange}
              className="mt-1 block w-full sm:w-auto border border-gray-300 rounded-lg p-2"
              placeholder="Min PG Grade"
            />
            <button
              onClick={filterStudents}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Filter Students
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="companyName"
              value={pdfInfo.companyName}
              onChange={handlePdfInfoChange}
              className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
              placeholder="Company Name"
            />
            <input
              type="date"
              name="date"
              value={pdfInfo.date}
              onChange={handlePdfInfoChange}
              className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
            />
            <input
              type="text"
              name="venue"
              value={pdfInfo.venue}
              onChange={handlePdfInfoChange}
              className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
              placeholder="Venue"
            />
            <input
              type="text"
              name="role"
              value={pdfInfo.role}
              onChange={handlePdfInfoChange}
              className="block w-full mb-2 border border-gray-300 rounded-lg p-2"
              placeholder="Role"
            />
            <button
              onClick={generatePDF}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
            >
              Generate PDF
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-200 px-4 py-2">Name</th>
                  <th className="border border-gray-200 px-4 py-2">10th</th>
                  <th className="border border-gray-200 px-4 py-2">12th</th>
                  <th className="border border-gray-200 px-4 py-2">UG</th>
                  <th className="border border-gray-200 px-4 py-2">PG</th>
                  <th className="border border-gray-200 px-4 py-2">Skills</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                      <td className="border border-gray-200 px-4 py-2">{student.tenth}</td>
                      <td className="border border-gray-200 px-4 py-2">{student.twelfth}</td>
                      <td className="border border-gray-200 px-4 py-2">{student.ug}</td>
                      <td className="border border-gray-200 px-4 py-2">{student.pg}</td>
                      <td className="border border-gray-200 px-4 py-2">{student.skillSet}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="border border-gray-200 px-4 py-2 text-center">
                      No filtered students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentList;
