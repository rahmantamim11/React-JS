import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHUbProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });

      };

      const handleSignOut = () => {

        signOut(auth)
        .then( result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error.message);
        });

        
      }

      const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHUbProvider)
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
      {
        user ? <button onClick={handleSignOut} >Sign Out</button> :
         <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
            <button onClick={handleGithubSignIn}>GitHub Login</button>
         </div>
        
      }
      {user && 
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;
