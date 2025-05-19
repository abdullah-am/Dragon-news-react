import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const {loginUser} = use(AuthContext);
  const navigate=useNavigate();
  const location= useLocation();

  const [success, setSuccess] = useState(false);
  const [errormessage, setErrorMessage] = useState("");


  const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
       // console.log(email,password);

        setErrorMessage("");
        setSuccess(false);

        loginUser(email,password)
        .then(()=>{
            //console.log(result);
            navigate(location?.state || '/')
            setSuccess(true);
        })
        .catch((error)=>{
            console.log(error);
            setErrorMessage(error.message);
        })
    };





  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-2xl text-center">Login Your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-xl">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label font-semibold text-xl">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center mt-2">
                don't have account ? <Link className='text-blue-500 underline' to="/auth/register">Register</Link>
            </p>
            {errormessage && <p className="text-red-500">{errormessage}</p>}
            {success && <p className="text-green-500">login succesfully</p>}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
