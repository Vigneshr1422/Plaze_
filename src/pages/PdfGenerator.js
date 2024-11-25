//   // import React, { useState, useEffect } from 'react';
//   // import { db } from '../services/firebase';
//   // import { collection, query, where, getDocs } from 'firebase/firestore';
//   // import * as XLSX from 'xlsx';
//   // import { useAuthContext } from '../context/AuthContext';
//   // import { useNavigate } from 'react-router-dom';
//   // import Header from './HeaderFooter';
//   // import Footer from './Footer';

//   // const ExcelGenerator = () => {
//   //   const { user } = useAuthContext();
//   //   const [students, setStudents] = useState([]);
//   //   const [companyName, setCompanyName] = useState('');
//   //   const [role, setRole] = useState('');
//   //   const [date, setDate] = useState('');

//   //   // State for percentage criteria
//   //   const [tenthCriteria, setTenthCriteria] = useState(60);
//   //   const [twelfthCriteria, setTwelfthCriteria] = useState(60);
//   //   const [ugCriteria, setUgCriteria] = useState(60);
//   //   const [pgCriteria, setPgCriteria] = useState(60);

//   //   const [loading, setLoading] = useState(true);
//   //   const [showToast, setShowToast] = useState(false);

//   //   const navigate = useNavigate();

//   //   useEffect(() => {
//   //     const fetchStudents = async () => {
//   //       if (!user) return;

//   //       try {
//   //         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//   //         const querySnapshot = await getDocs(q);
//   //         const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   //         setStudents(studentsData);
//   //       } catch (error) {
//   //         console.error('Error fetching student data:', error);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };

//   //     fetchStudents();
//   //   }, [user]);

//   //   const generateExcel = () => {
//   //     const filteredStudents = students.filter((student) => 
//   //         student.tenth >= tenthCriteria &&
//   //         student.twelfth >= twelfthCriteria &&
//   //         student.ug >= ugCriteria &&
//   //         student.pg >= pgCriteria
//   //     );

//   //     const data = filteredStudents.map((student) => ({
//   //         'Company Name': companyName,
//   //         'Role': role,
//   //         'Date': date,
//   //         'Reg No': student.regNo,
//   //         'Name': student.name,
//   //         'DoB': student.dob,
//   //         'Gender': student.gender,
//   //         'Address': student.address,
//   //         '10th%': student.tenth,
//   //         '12th%': student.twelfth,
//   //         'UG%': student.ug,
//   //         'PG%': student.pg,
//   //         'Skill Set': student.skillSet,
//   //     }));

//   //     const worksheet = XLSX.utils.json_to_sheet(data);
//   //     const workbook = XLSX.utils.book_new();
//   //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

//   //     XLSX.writeFile(workbook, 'Students.xlsx');

//   //     setShowToast(true);
//   //     setTimeout(() => {
//   //       setShowToast(false);
//   //     }, 3000);
//   //   };

//   //   if (loading) {
//   //     return <div>Loading...</div>;
//   //   }

//   //   return (
//   //     <div className="flex flex-col min-h-screen">
//   //       <Header />
//   //       <div className="container mx-auto p-4 sm:p-6 flex-grow mt-20">
//   //         {/* Responsive grid for form sections */}
//   //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//   //           <div className="space-y-4">
//   //             <h2 className="text-2xl font-bold mb-4">Company Details</h2>
//   //             <div>
//   //               <label className="block mb-2">Company Name</label>
//   //               <input
//   //                 type="text"
//   //                 value={companyName}
//   //                 onChange={(e) => setCompanyName(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>

//   //             <div>
//   //               <label className="block mb-2">Role</label>
//   //               <input
//   //                 type="text"
//   //                 value={role}
//   //                 onChange={(e) => setRole(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>

//   //             <div>
//   //               <label className="block mb-2">Date</label>
//   //               <input
//   //                 type="date"
//   //                 value={date}
//   //                 onChange={(e) => setDate(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
//   //           </div>

//   //           <div className="space-y-4">
//   //             <h3 className="text-xl font-semibold mb-4">Enter Criteria for Filtering</h3>

//   //             <div>
//   //               <label className="block mb-2">Minimum 10th Grade Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={tenthCriteria}
//   //                 onChange={(e) => setTenthCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>

//   //             <div>
//   //               <label className="block mb-2">Minimum 12th Grade Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={twelfthCriteria}
//   //                 onChange={(e) => setTwelfthCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>

//   //             <div>
//   //               <label className="block mb-2">Minimum UG Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={ugCriteria}
//   //                 onChange={(e) => setUgCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>

//   //             <div>
//   //               <label className="block mb-2">Minimum PG Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={pgCriteria}
//   //                 onChange={(e) => setPgCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>

//   //             <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4">
//   //               <button
//   //                 onClick={() => navigate(-1)}
//   //                 className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 w-full sm:w-auto mb-2 sm:mb-0"
//   //               >
//   //                 Back
//   //               </button>
//   //               <button
//   //                 onClick={generateExcel}
//   //                 className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
//   //               >
//   //                 Generate Excel
//   //               </button>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>

//   //       {showToast && (
//   //         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
//   //           Generate Successful!
//   //         </div>
//   //       )}

//   //       <Footer />
//   //     </div>
//   //   );
//   // };

//   // // export default ExcelGenerator;
//   // import React, { useState, useEffect } from 'react';
//   // import { db } from '../services/firebase';
//   // import { collection, query, where, getDocs } from 'firebase/firestore';
//   // import * as XLSX from 'xlsx';
//   // import { useAuthContext } from '../context/AuthContext';
//   // import { useNavigate } from 'react-router-dom';
//   // import Header from './HeaderFooter';
//   // import Footer from './Footer';
  
//   // const ExcelGenerator = () => {
//   //   const { user } = useAuthContext();
//   //   const [students, setStudents] = useState([]);
//   //   const [companyName, setCompanyName] = useState('');
//   //   const [role, setRole] = useState('');
//   //   const [date, setDate] = useState('');
  
//   //   // State for percentage criteria
//   //   const [tenthCriteria, setTenthCriteria] = useState(60);
//   //   const [twelfthCriteria, setTwelfthCriteria] = useState(60);
//   //   const [ugCriteria, setUgCriteria] = useState(60);
//   //   const [pgCriteria, setPgCriteria] = useState(60);
  
//   //   const [loading, setLoading] = useState(true);
//   //   const [showToast, setShowToast] = useState(false);
  
//   //   const navigate = useNavigate();
  
//   //   useEffect(() => {
//   //     const fetchStudents = async () => {
//   //       if (!user) return;
  
//   //       try {
//   //         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//   //         const querySnapshot = await getDocs(q);
//   //         const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   //         setStudents(studentsData);
//   //       } catch (error) {
//   //         console.error('Error fetching student data:', error);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };
  
//   //     fetchStudents();
//   //   }, [user]);
  
//   //   const generateExcel = () => {
//   //     const filteredStudents = students.filter((student) => 
//   //         student.tenth >= tenthCriteria &&
//   //         student.twelfth >= twelfthCriteria &&
//   //         student.ug >= ugCriteria &&
//   //         student.pg >= pgCriteria
//   //     );
  
//   //     const data = filteredStudents.map((student) => ({
//   //         'Company Name': companyName,
//   //         'Role': role,
//   //         'Date': date,
//   //         'Reg No': student.regNo,
//   //         'Name': student.name,
//   //         'DoB': student.dob,
//   //         'Gender': student.gender,
//   //         'Address': student.address,
//   //         '10th%': student.tenth,
//   //         '12th%': student.twelfth,
//   //         'UG%': student.ug,
//   //         'PG%': student.pg,
//   //         'Skill Set': student.skillSet,
//   //         'Passed-Out Year': student.passedOutYear, // Added Passed-Out Year here
//   //     }));
  
//   //     const worksheet = XLSX.utils.json_to_sheet(data);
//   //     const workbook = XLSX.utils.book_new();
//   //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
  
//   //     XLSX.writeFile(workbook, 'Students.xlsx');
  
//   //     setShowToast(true);
//   //     setTimeout(() => {
//   //       setShowToast(false);
//   //     }, 3000);
//   //   };
  
//   //   if (loading) {
//   //     return <div>Loading...</div>;
//   //   }
  
//   //   return (
//   //     <div className="flex flex-col min-h-screen">
//   //       <Header />
//   //       <div className="container mx-auto p-4 sm:p-6 flex-grow mt-20">
//   //         {/* Responsive grid for form sections */}
//   //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//   //           <div className="space-y-4">
//   //             <h2 className="text-2xl font-bold mb-4">Company Details</h2>
//   //             <div>
//   //               <label className="block mb-2">Company Name</label>
//   //               <input
//   //                 type="text"
//   //                 value={companyName}
//   //                 onChange={(e) => setCompanyName(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
  
//   //             <div>
//   //               <label className="block mb-2">Role</label>
//   //               <input
//   //                 type="text"
//   //                 value={role}
//   //                 onChange={(e) => setRole(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
  
//   //             <div>
//   //               <label className="block mb-2">Date</label>
//   //               <input
//   //                 type="date"
//   //                 value={date}
//   //                 onChange={(e) => setDate(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
//   //           </div>
  
//   //           <div className="space-y-4">
//   //             <h3 className="text-xl font-semibold mb-4">Enter Criteria for Filtering</h3>
  
//   //             <div>
//   //               <label className="block mb-2">Minimum 10th Grade Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={tenthCriteria}
//   //                 onChange={(e) => setTenthCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
  
//   //             <div>
//   //               <label className="block mb-2">Minimum 12th Grade Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={twelfthCriteria}
//   //                 onChange={(e) => setTwelfthCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
  
//   //             <div>
//   //               <label className="block mb-2">Minimum UG Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={ugCriteria}
//   //                 onChange={(e) => setUgCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
  
//   //             <div>
//   //               <label className="block mb-2">Minimum PG Percentage</label>
//   //               <input
//   //                 type="number"
//   //                 value={pgCriteria}
//   //                 onChange={(e) => setPgCriteria(e.target.value)}
//   //                 className="border p-2 w-full rounded"
//   //               />
//   //             </div>
  
//   //             <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4">
//   //               <button
//   //                 onClick={() => navigate(-1)}
//   //                 className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 w-full sm:w-auto mb-2 sm:mb-0"
//   //               >
//   //                 Back
//   //               </button>
//   //               <button
//   //                 onClick={generateExcel}
//   //                 className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
//   //               >
//   //                 Generate Excel
//   //               </button>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
  
//   //       {showToast && (
//   //         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
//   //           Generate Successful!
//   //         </div>
//   //       )}
  
//   //       <Footer />
//   //     </div>
//   //   );
//   // };
  
//   // export default ExcelGenerator;
  

//   import React, { useState, useEffect } from 'react';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import * as XLSX from 'xlsx';
// import { useAuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const ExcelGenerator = () => {
//   const { user } = useAuthContext();
//   const [students, setStudents] = useState([]);
//   const [companyName, setCompanyName] = useState('');
//   const [role, setRole] = useState('');
//   const [date, setDate] = useState('');
//   const [jobLocation, setJobLocation] = useState(''); // New state for job location
//   const [packageAmount, setPackageAmount] = useState(''); // New state for job package

//   // State for percentage criteria
//   const [tenthCriteria, setTenthCriteria] = useState(60);
//   const [twelfthCriteria, setTwelfthCriteria] = useState(60);
//   const [ugCriteria, setUgCriteria] = useState(60);
//   const [pgCriteria, setPgCriteria] = useState(60);

//   const [loading, setLoading] = useState(true);
//   const [showToast, setShowToast] = useState(false);

//   const navigate = useNavigate();

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

//   // Extract unique Passed-Out Years
//   const passedOutYears = [...new Set(students.map((student) => student.passedOutYear))];

//   const generateExcel = () => {
//     const filteredStudents = students.filter((student) =>
//       student.tenth >= tenthCriteria &&
//       student.twelfth >= twelfthCriteria &&
//       student.ug >= ugCriteria &&
//       student.pg >= pgCriteria
//     );

//     const data = filteredStudents.map((student) => ({
//       'Company Name': companyName,
//       'Role': role,
//       'Date': date,
//       'Job Location': jobLocation, // Added Job Location here
//       'Package': packageAmount, // Added Package here
//       'Reg No': student.regNo,
//       'Name': student.name,
//       'DoB': student.dob,
//       'Gender': student.gender,
//       'Address': student.address,
//       '10th%': student.tenth,
//       '12th%': student.twelfth,
//       'UG%': student.ug,
//       'PG%': student.pg,
//       'Skill Set': student.skillSet,
//       'Passed-Out Year': student.passedOutYear,
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

//     XLSX.writeFile(workbook, 'Students.xlsx');

//     setShowToast(true);
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="container mx-auto p-4 sm:p-6 flex-grow mt-20">
//         {/* Responsive grid for form sections */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold mb-4">Company Details</h2>
//             <div>
//               <label className="block mb-2">Company Name</label>
//               <input
//                 type="text"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Role</label>
//               <input
//                 type="text"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Date</label>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             {/* New Fields for Job Location and Package */}
//             <div>
//               <label className="block mb-2">Job Location</label>
//               <input
//                 type="text"
//                 value={jobLocation}
//                 onChange={(e) => setJobLocation(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Package</label>
//               <input
//                 type="text"
//                 value={packageAmount}
//                 onChange={(e) => setPackageAmount(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold mb-4">Enter Criteria for Filtering</h3>

//             <div>
//               <label className="block mb-2">Minimum 10th Grade Percentage</label>
//               <input
//                 type="number"
//                 value={tenthCriteria}
//                 onChange={(e) => setTenthCriteria(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Minimum 12th Grade Percentage</label>
//               <input
//                 type="number"
//                 value={twelfthCriteria}
//                 onChange={(e) => setTwelfthCriteria(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Minimum UG Percentage</label>
//               <input
//                 type="number"
//                 value={ugCriteria}
//                 onChange={(e) => setUgCriteria(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Minimum PG Percentage</label>
//               <input
//                 type="number"
//                 value={pgCriteria}
//                 onChange={(e) => setPgCriteria(e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             {/* Filter by Passed-Out Year */}
//             <div>
//               <label className="block mb-2">Filter by Passed-Out Year</label>
//               <select
//                 value={passedOutYearFilter}
//                 onChange={(e) => setPassedOutYearFilter(e.target.value)}
//                 className="border p-2 w-full rounded"
//               >
//                 <option value="">Select Passed-Out Year</option>
//                 {passedOutYears.map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4">
//               <button
//                 onClick={() => navigate(-1)}
//                 className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 w-full sm:w-auto mb-2 sm:mb-0"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={generateExcel}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
//               >
//                 Generate Excel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showToast && (
//         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
//           Generate Successful!
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default ExcelGenerator;


import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import * as XLSX from 'xlsx';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from './HeaderFooter';
import Footer from './Footer';

const ExcelGenerator = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [packageAmount, setPackageAmount] = useState('');

  // State for percentage criteria
  const [tenthCriteria, setTenthCriteria] = useState(60);
  const [twelfthCriteria, setTwelfthCriteria] = useState(60);
  const [ugCriteria, setUgCriteria] = useState(60);
  const [pgCriteria, setPgCriteria] = useState(60);

  // State for passed-out year filter
  const [passedOutYearFilter, setPassedOutYearFilter] = useState('');

  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

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

  // Extract unique Passed-Out Years
  const passedOutYears = [...new Set(students.map((student) => student.passedOutYear))];

  const generateExcel = () => {
    // Apply filter based on passedOutYearFilter
    const filteredStudents = students.filter((student) =>
      student.tenth >= tenthCriteria &&
      student.twelfth >= twelfthCriteria &&
      student.ug >= ugCriteria &&
      student.pg >= pgCriteria &&
      (passedOutYearFilter ? student.passedOutYear === passedOutYearFilter : true)
    );

    const data = filteredStudents.map((student) => ({
      'Company Name': companyName,
      'Role': role,
      'Date': date,
      'Job Location': jobLocation,
      'Package': packageAmount,
      'Reg No': student.regNo,
      'Name': student.name,
      'DoB': student.dob,
      'Gender': student.gender,
      'Address': student.address,
      '10th%': student.tenth,
      '12th%': student.twelfth,
      'UG%': student.ug,
      'PG%': student.pg,
      'Skill Set': student.skillSet,
      'Passed-Out Year': student.passedOutYear,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    XLSX.writeFile(workbook, 'Students.xlsx');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-4 sm:p-6 flex-grow mt-20">
        {/* Responsive grid for form sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Company Details</h2>
            <div>
              <label className="block mb-2">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            {/* New Fields for Job Location and Package */}
            <div>
              <label className="block mb-2">Job Location</label>
              <input
                type="text"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Package</label>
              <input
                type="text"
                value={packageAmount}
                onChange={(e) => setPackageAmount(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Enter Criteria for Filtering</h3>

            <div>
              <label className="block mb-2">Minimum 10th Grade Percentage</label>
              <input
                type="number"
                value={tenthCriteria}
                onChange={(e) => setTenthCriteria(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Minimum 12th Grade Percentage</label>
              <input
                type="number"
                value={twelfthCriteria}
                onChange={(e) => setTwelfthCriteria(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Minimum UG Percentage</label>
              <input
                type="number"
                value={ugCriteria}
                onChange={(e) => setUgCriteria(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Minimum PG Percentage</label>
              <input
                type="number"
                value={pgCriteria}
                onChange={(e) => setPgCriteria(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </div>

            {/* Filter by Passed-Out Year */}
            <div>
              <label className="block mb-2">Filter by Passed-Out Year</label>
              <select
                value={passedOutYearFilter}
                onChange={(e) => setPassedOutYearFilter(e.target.value)}
                className="border p-2 w-full rounded"
              >
                <option value="">Select Passed-Out Year</option>
                {passedOutYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 w-full sm:w-auto mb-2 sm:mb-0"
              >
                Back
              </button>
              <button
                onClick={generateExcel}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
              >
                Generate Excel
              </button>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          Generate Successful!
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ExcelGenerator;
