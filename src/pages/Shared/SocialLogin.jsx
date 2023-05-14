import { useContext } from "react";
import { FaFacebookF, FaGithubAlt, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }

    
    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }


  return (
    <div className="text-center ">
      <h3 className="text-xl font-bold my-6">Or Sign in with</h3>
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FaGoogle />
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-circle btn-outline mx-5">
          <FaGithubAlt />
        </button>
        <button  className="btn btn-circle btn-outline">
          <FaFacebookF />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
