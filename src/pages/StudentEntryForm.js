import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './HeaderFooter';
import Footer from './Footer';

const StudentEntry = () => {
  const { user } = useAuthContext(); // Get the currently logged-in user
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    regNo: '',
    name: '',
    dob: '',
    gender: '',
    tenth: '',
    twelfth: '',
    ug: '',
    pg: '',
    address: '',
    skillSet: '',
  });

  // Handler for manual form entry
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure percentage fields don't exceed 100
    if (['tenth', 'twelfth', 'ug', 'pg'].includes(name) && value > 100) {
      toast.error('Percentage cannot exceed 100');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for manual form submission
  const handleManualSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('User not authenticated');
      return;
    }

    setLoading(true);

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'students'), {
        ...formData,
        userId: user.uid,
      });
      toast.success('Data saved successfully!');
      console.log('Document written with ID: ', docRef.id);

      // Clear the form after submission
      setFormData({
        regNo: '',
        name: '',
        dob: '',
        gender: '',
        tenth: '',
        twelfth: '',
        ug: '',
        pg: '',
        address: '',
        skillSet: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error saving data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6 mt-24">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Entry</h2>

          {/* Manual Entry Form */}
          <form onSubmit={handleManualSubmit}>
            {/* Reg No */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration No
              </label>
              <input
                type="text"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter registration number"
                required
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter student's full name"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter address"
                required
              />
            </div>

            {/* Academic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">10th Grade Percentage</label>
                <input
                  type="number"
                  name="tenth"
                  value={formData.tenth}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter 10th grade percentage"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">12th Grade Percentage</label>
                <input
                  type="number"
                  name="twelfth"
                  value={formData.twelfth}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter 12th grade percentage"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Undergraduate Percentage</label>
                <input
                  type="number"
                  name="ug"
                  value={formData.ug}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter UG percentage"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postgraduate Percentage</label>
                <input
                  type="number"
                  name="pg"
                  value={formData.pg}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter PG percentage"
                  required
                />
              </div>
            </div>

            {/* Skill Set */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill Set</label>
              <input
                type="text"
                name="skillSet"
                value={formData.skillSet}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter skills (e.g., JavaScript, Python, etc.)"
                required
              />
            </div>

            {/* Button Container */}
            <div className="flex justify-between mt-6">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => window.history.back()} // Navigate to the previous page
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Back
              </button>

              {/* Save Button */}
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentEntry;
