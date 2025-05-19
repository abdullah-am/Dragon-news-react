import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usericon from '../../assets/user.png'
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
    const {user,signoutuser} = use(AuthContext);
  console.log(user);

  const handleSignout =()=>{
    signoutuser()
    .then(()=>{
      console.log('sign out succesful')
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.displayName}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-3 items-center'>
                {/* <img src={usericon} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link> */}
                <img className='w-12 rounded-full' src={`${user ? user.photoURL: usericon}`} alt="" />
                {user ? 
                <>
                {/* <span>{user.email}</span> */}
                <a onClick={handleSignout} className="btn btn-primary px-10">SignOut</a> 
                </>
                : <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>}

            </div>
        </div>
    );
};

export default Navbar;