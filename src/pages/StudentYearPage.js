
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const StudentYearPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedYear, setSelectedYear] = useState(''); // State for selected year
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const fetchStudents = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const studentsCollection = collection(db, 'students');
          const q = query(studentsCollection, where("userId", "==", user.uid));
          const studentSnapshot = await getDocs(q);
          const studentList = studentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setStudents(studentList);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Extract unique years for the dropdown
  const uniqueYears = [...new Set(students.map(student => student.passedOutYear))];

  // Filter students based on the selected year
  const filteredStudents = selectedYear
    ? students.filter(student => student.passedOutYear === selectedYear)
    : students;

  const updatePlacementStatus = async (studentId, status) => {
    try {
      const studentRef = doc(db, 'students', studentId);
      await updateDoc(studentRef, { placementStatus: status });
      setStudents(prevStudents =>
        prevStudents.map(student =>
          student.id === studentId ? { ...student, placementStatus: status } : student
        )
      );

      if (status === 'Placed') toast.success('Student marked as Placed!');
      else if (status === 'Unplaced') toast.error('Student marked as Unplaced!');
      else toast.info('Student status updated to None.');
    } catch (error) {
      console.error("Error updating placement status:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-6 px-4 pt-16">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 flex flex-col relative">
        <h1 className="text-2xl font-bold mb-4 text-center">Student Year Page</h1>

        {/* Year Dropdown Filter */}
        <div className="mb-4 flex justify-end">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Years</option>
            {uniqueYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-600" role="status"></div>
          </div>
        ) : (
          <>
            {filteredStudents.length === 0 ? (
              <p className="text-center">No students found.</p>
            ) : (
              <div className="overflow-x-auto mb-4">
                <table className="table-auto w-full border-collapse border border-gray-400 shadow-lg">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-2 border">Reg No</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Gender</th>
                      <th className="px-4 py-2 border">Passed-Out Year</th>
                      <th className="px-4 py-2 border">Placement Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-100">
                        <td className="border px-4 py-2">{student.regNo}</td>
                        <td className="border px-4 py-2">{student.name}</td>
                        <td className="border px-4 py-2">{student.gender}</td>
                        <td className="border px-4 py-2">{student.passedOutYear}</td>
                        <td className="border px-4 py-2">
                          {/* Mobile and desktop views */}
                          {isMobile ? (
                            <select
                              value={student.placementStatus}
                              onChange={(e) => updatePlacementStatus(student.id, e.target.value)}
                              className="p-2 border rounded w-full"
                            >
                              <option value="None">None</option>
                              <option value="Placed">Placed</option>
                              <option value="Unplaced">Unplaced</option>
                            </select>
                          ) : (
                            <>
                              {/* Buttons for desktop */}
                              <button
                                className={`px-2 py-1 rounded ${student.placementStatus === 'Placed' ? 'bg-green-500' : 'bg-gray-300'} hover:bg-green-400`}
                                onClick={() => updatePlacementStatus(student.id, 'Placed')}
                              >
                                Placed
                              </button>
                              <button
                                className={`ml-2 px-2 py-1 rounded ${student.placementStatus === 'Unplaced' ? 'bg-red-500' : 'bg-gray-300'} hover:bg-red-400`}
                                onClick={() => updatePlacementStatus(student.id, 'Unplaced')}
                              >
                                Unplaced
                              </button>
                              <button
                                className={`ml-2 px-2 py-1 rounded ${student.placementStatus === 'None' ? 'bg-gray-500' : 'bg-gray-300'} hover:bg-gray-400`}
                                onClick={() => updatePlacementStatus(student.id, 'None')}
                              >
                                None
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Back Button */}
        <div className="flex justify-end mt-auto">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default StudentYearPage;
