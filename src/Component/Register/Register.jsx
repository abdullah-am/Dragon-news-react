import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {

    const {createUser,updateUser}=use(AuthContext);
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
  const [errormessage, setErrorMessage] = useState("");

    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const terms = e.target.terms.checked;
        //console.log(name,photo,email,password)

        setSuccess(false);
        setErrorMessage("");

        if(!terms){
        setErrorMessage('please accept terms and conditions');
        return;
        }





        createUser(email,password)
      .then(() => {
        //console.log(result.user);
        updateUser({displayName:name ,photoURL:photo})
        .then(() => {
            setSuccess(true);
            setTimeout(() => navigate("/auth/login"), 2000);
        }).catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        });
        //setSuccess(true);
        //setTimeout(() => navigate("/auth/login"), 2000);

        //email verify
        // sendEmailVerification(auth.currentUser)
        // .then(()=>{
        //     setSuccess(true);
        // })
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
    };

    //const [photoSource, setPhotoSource] = useState('device');
    return (
        <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-2xl text-center">Register Your account</h2>
        <form onSubmit={handleRegister} noValidate className="card-body">
          <fieldset className="fieldset">

            <label className="label font-semibold text-xl">Your Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required/>

            <label className="label font-semibold text-xl">Photo URL</label>
            <input name='photo' type="url" className="input" placeholder="Photo URL" required/>

            <label className="label font-semibold text-xl">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required/>

            <label className="label font-semibold text-xl">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required/>

            <label className="label mt-4">
            <input type="checkbox" name="terms" className="checkbox" />
            Accept <span className='font-semibold'>Terms and Conditions</span>
            </label>

            <button type='submit' value="Submit" className="btn btn-neutral mt-4">Register</button>
            
            <p className="font-semibold text-center mt-2">
                Already have account ? <Link className='text-blue-500 underline' to="/auth/login">Login</Link>
            </p>
            {errormessage && <p className="text-red-500">{errormessage}</p>}
            {success && <p className="text-green-500">registered succesfully</p>}
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;


{/* <label className="label font-semibold text-xl mt-4">Profile Photo</label>
                        <div className="flex gap-4 mb-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="photoSource"
                                    value="device"
                                    checked={photoSource === 'device'}
                                    onChange={() => setPhotoSource('device')}
                                    className="radio radio-primary mr-2"
                                />
                                Upload from Device
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="photoSource"
                                    value="url"
                                    checked={photoSource === 'url'}
                                    onChange={() => setPhotoSource('url')}
                                    className="radio radio-primary mr-2"
                                />
                                Add URL
                            </label>
                        </div>

                        {photoSource === 'device' ? (
                            <input
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered w-full"
                            />
                        ) : (
                            <input
                                type="url"
                                className="input"
                                placeholder="Enter Photo URL"
                            />
                        )} */}
