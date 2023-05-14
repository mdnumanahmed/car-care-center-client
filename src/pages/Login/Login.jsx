import { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
      event.preventDefault();

      setError("");
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
        .then((result) => {
          const loggedUser = result.user;          
          navigate(from, {replace: true})
        })
        .catch((error) => {
          setError(error.message);
        });
    };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content space-x-10 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <SocialLogin />
            <p className="my-4 text-center">
              New to Car Care Center?
              <Link className="text-primary font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
