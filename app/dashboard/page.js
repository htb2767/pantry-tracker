"use client";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../../firebase";
import Navbar from "../components/NavBar.js";

function Dashboard() {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  return (
    <div className="dashboard">
      <Navbar
        user={user}
      />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div style={{ marginTop: "85px", textAlign: "center" }}>
          <h1>Hi {user ? user.email : "Guest"}!</h1>
          <p>
            Manage your pantry items efficiently and never run out of your
            essential groceries. Get notified about low stock items, track your
            pantry inventory, and much more!
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;