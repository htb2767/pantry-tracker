// pages/signup.js
"use client"; 
import { auth } from '../../firebase';
import React, { useState  } from 'react';
import { useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      });
      router.push('/dashboard');
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <style jsx>{`
        div {
          padding: 2rem;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          margin-bottom: 1rem;
          padding: 0.5rem;
        }
        button {
          padding: 0.5rem;
          background-color: #0070f3;
          color: white;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
