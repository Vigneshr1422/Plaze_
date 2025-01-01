import { db, auth } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// Function to add student data
export const addStudentData = async (student) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User not authenticated');
  }

  try {
    await addDoc(collection(db, 'students'), {
      ...student,
      userId: user.uid, // Associate data with logged-in user
      timestamp: new Date(),
    });
    console.log('Student data added successfully');
  } catch (error) {
    console.error('Error adding student data:', error);
  }
};

// Function to fetch student data for the current user
export const fetchStudentData = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User not authenticated');
  }

  const q = query(collection(db, 'students'), where('userId', '==', user.uid));
  const querySnapshot = await getDocs(q);
  
  let studentList = [];
  querySnapshot.forEach((doc) => {
    studentList.push({ id: doc.id, ...doc.data() });
  });
  return studentList;
};
