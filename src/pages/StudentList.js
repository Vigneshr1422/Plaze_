
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import Header from './HeaderFooter';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Toast = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white text-center py-4 px-6 rounded shadow-lg">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Close
      </button>
    </div>
  </div>
);

const StudentList = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
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

  const deleteAllStudents = async () => {
    if (window.confirm('Are you sure you want to delete all students? This action cannot be undone.')) {
      try {
        const q = query(collection(db, 'students'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
        await Promise.all(deletePromises);
        setStudents([]);
        setToast('All students deleted successfully!');
      } catch (error) {
        console.error('Error deleting students:', error);
      }
    }
  };

  const handleEdit = async (student) => {
    const updatedData = {
      regNo: prompt("Enter new Registration No:", student.regNo),
      name: prompt("Enter new Name:", student.name),
      dob: prompt("Enter new Date of Birth:", student.dob),
      gender: prompt("Enter new Gender:", student.gender),
      address: prompt("Enter new Address:", student.address),
      tenth: prompt("Enter new 10th Percentage:", student.tenth),
      twelfth: prompt("Enter new 12th Percentage:", student.twelfth),
      ug: prompt("Enter new UG Percentage:", student.ug),
      pg: prompt("Enter new PG Percentage:", student.pg),
      skillSet: prompt("Enter new Skill Set:", student.skillSet),
    };

    if (Object.values(updatedData).every((field) => field)) {
      try {
        await updateDoc(doc(db, 'students', student.id), updatedData);
        setStudents((prev) =>
          prev.map((std) => (std.id === student.id ? { ...std, ...updatedData } : std))
        );
        setToast('Student details updated successfully!');
      } catch (error) {
        console.error('Error updating student data:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
      <Header />

      <main className="flex-grow p-6 mt-24">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-300">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 mb-4"
          >
            Back
          </button>
          <button
            onClick={deleteAllStudents}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 mb-4 float-right"
          >
            Delete All Students
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

          <div className="overflow-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2 border-b">Reg No</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">DoB</th>
                  <th className="px-4 py-2 border-b">Gender</th>
                  <th className="px-4 py-2 border-b">Address</th>
                  <th className="px-4 py-2 border-b">10th%</th>
                  <th className="px-4 py-2 border-b">12th%</th>
                  <th className="px-4 py-2 border-b">UG%</th>
                  <th className="px-4 py-2 border-b">PG%</th>
                  <th className="px-4 py-2 border-b">Skill Set</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{student.regNo}</td>
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">{student.dob}</td>
                    <td className="border px-4 py-2">{student.gender}</td>
                    <td className="border px-4 py-2">{student.address}</td>
                    <td className="border px-4 py-2">{student.tenth}</td>
                    <td className="border px-4 py-2">{student.twelfth}</td>
                    <td className="border px-4 py-2">{student.ug}</td>
                    <td className="border px-4 py-2">{student.pg}</td>
                    <td className="border px-4 py-2">{student.skillSet}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-200"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      <Footer />
    </div>
  );
};

export default StudentList;
