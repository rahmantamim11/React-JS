import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(
      "First Name:",
      firstName,
      "Last Name:",
      lastName,
      "Email:",
      email,
      "Password:",
      password
    );

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-emerald-300">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-red-600">Register Now!</h3>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="first name"
                    name="firstName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="last name"
                    name="lastName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className="text-center">
                <Link to="/login">
                  <button className="btn btn-link">
                    Already have an Account? Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
