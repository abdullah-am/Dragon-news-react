import React from 'react';
import Header from '../Component/Header/Header';
import RightAside from '../Component/Body/RightAside';
import NewsDetailcard from '../Component/Body/NewsDetailcard';

const NewsDetail = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto mt-8 grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-3'>News Detail</h2>
                <NewsDetailcard></NewsDetailcard>
            </section>
            <aside  className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetail;