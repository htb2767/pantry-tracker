// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase';
import {
  signInWithEmailAndPassword
} from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      router.push('/dashboard');
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
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

export default Login;
