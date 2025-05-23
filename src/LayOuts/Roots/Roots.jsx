import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/Header/Header';
import Latest from '../../Component/Latestnews/Latest';
import Navbar from '../../Component/Navbar/Navbar';
import LeftAside from '../../Component/Body/LeftAside';
import RightAside from '../../Component/Body/RightAside';

export const Roots = () => {
    return (
        <div>
            <header>
                <Header></Header>
                {
                    import.meta.env.VITE_name
                }
                <section className='w-11/12 mx-auto mt-5'>
                    <Latest></Latest>
                </section>
                <nav className='w-11/12 mx-auto mt-5'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto mt-8 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside  className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};