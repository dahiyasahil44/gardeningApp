import './App.css'
import AppRouter from './routes/AppRouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { setUser } from './redux/authSlice';
import { requestNotificationPermission } from './services/notifications';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        dispatch(setUser({ email: currentUser.email, uid: currentUser.uid }));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App;
