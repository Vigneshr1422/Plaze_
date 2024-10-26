// src/services/StudentService.js
import { db } from '../services/firebase'; // Import your Firebase configuration
import { collection, getDocs, query, where } from 'firebase/firestore';

/**
 * Fetch students from Firestore for the current user.
 * @param {string} userId - The ID of the current user.
 * @returns {Promise<Array>} - A promise that resolves to an array of students.
 */
export const getUserStudents = async (userId) => {
    const studentsRef = collection(db, 'students');
    const q = query(studentsRef, where('userId', '==', userId)); // Ensure each student has a userId field
    const querySnapshot = await getDocs(q);
    const students = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return students;
};

/**
 * Filter students based on the given criteria.
 * @param {Array} students - The list of students to filter.
 * @param {Object} criteria - The criteria to filter students.
 * @returns {Array} - An array of filtered students.
 */
export const getStudentsByCriteria = (students, criteria) => {
    return students.filter(student => {
        const isValidTenth = criteria.tenth ? student.tenth >= criteria.tenth : true;
        const isValidTwelfth = criteria.twelfth ? student.twelfth >= criteria.twelfth : true;
        const isValidUndergraduate = criteria.undergraduate ? student.undergraduate >= criteria.undergraduate : true;
        const isValidPostgraduate = criteria.postgraduate ? student.postgraduate >= criteria.postgraduate : true;

        return isValidTenth && isValidTwelfth && isValidUndergraduate && isValidPostgraduate;
    });
};
