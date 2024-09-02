// components/Navbar.js
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation';
const Navbar = ({user}) => {
  const router = useRouter();



  const handleSignOut = async () => {
    await auth.signOut();
    router.push('/');
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {!user ? (
          <>
            <li><a href="/sign-up">Sign Up</a></li>
          </>
        ) : (
          <li><button onClick={handleSignOut}>Sign Out</button></li>
        )}
      </ul>
      <style jsx>{`
        nav {
          background-color: #333;
          padding: 1rem;
        }
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-right: 1rem;
        }
        a, button {
          color: white;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        button {
          background: #444;
          padding: 0.5rem;
        }
        button:hover {
          background: #555;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
