import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/Body/NewsCard';

export const Newscategory = () => {
    const {id} = useParams();
    const data=useLoaderData();
    const [newslist,setNewsList]= useState([]);

    useEffect(()=>{
        if(id==0){
            setNewsList(data);
            return;
        }
        else if(id=='1'){
        const filternews = data.filter(news=>news.others.is_today_pick==true);
        setNewsList(filternews);
        }else{
            const filternews = data.filter(news=>news.category_id==id);
            //console.log(filternews);
            setNewsList(filternews);
        }
    },[data,id]);
    return (
        <div>
            <h2 className='font-bold'>total News <span className='text-secondary'>{newslist.length}</span> found</h2>
            <div className='grid grid-cols-1 gap-4 max-h-[calc(4*400px)] overflow-y-auto'>
                {
                    newslist.map(news=>
                    <NewsCard key={news.id} news={news}></NewsCard>
                )
                }
            </div>
        </div>
    );
};