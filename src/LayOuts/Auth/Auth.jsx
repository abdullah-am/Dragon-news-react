import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-4'>
            <Outlet></Outlet>
            </main>

        </div>
    );
};

export default Auth;