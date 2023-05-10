import React, { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSignUp = (event) => {
    event.preventDefault();

    setError('')
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPassword.value;
    const photo = form.photo.value;

    if(password.length < 6){
        setError('Password must be 6 characters or longer')
        return
    }

    if(password !== confirmPass){
        setError('Password not matched!')
        return
    }

    createUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        toast('User created successfully!')
    })
    .catch(error => {
        setError(error.message)
    })

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content space-x-10 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
              {error && <p className="mt-4 text-center text-orange-400 border-2 p-2 rounded">{error}
            </p>}
            
            <p className="my-4 text-center">
              Already Have an Account?
              <Link className="text-primary font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
