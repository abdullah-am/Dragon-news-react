import React, { use } from 'react';
import { NavLink } from 'react-router';

const CategoryPromise = fetch("/categories.json")
.then(res=> res.json());

const Category = () => {
    //console.log(CategoryPromise);
    const categories = use(CategoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Category({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                    categories.map(category=>
                    <NavLink key={category.id}
                    className={({ isActive}) =>(isActive ? " btn btn-md bg-base-300 border-transparent shadow-none hover hover:bg-[#E7E7E7] font-semibold" : "font-semibold text-accent")}
                    to={`/newscategory/${category.id}`}
                    >
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;