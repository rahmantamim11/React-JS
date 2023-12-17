import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-cyan-600 text-emerald-300">
        <button className="btn btn-ghost text-xl">RT Auth Master</button>
        <div className="mx-80">
          <Link className="btn btn-ghost text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost text-xl" to="/orders">
            Orders
          </Link>
          <Link className="btn btn-ghost text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost text-xl" to="/register">
            Register
          </Link>
          {user && <Link className="btn btn-ghost text-xl" to="/profile">
            Profile
          </Link>}
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogOut} className="btn btn-xs">
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login">Login </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
