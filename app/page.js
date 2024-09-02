// src/App.js
"use client"; 
import React, { useState,useEffect  } from 'react';
import { app ,auth} from "../firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Navbar from "./components/NavBar";
import Login from './components/LogIn';
function App() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        router.push("/dashboard");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [router]);
  return (
    <div>
      <Navbar user={user} />
      <Login />
    </div>
  );
}

export default App;
