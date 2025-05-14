import React from 'react';
import clss from '../../assets/class.png'
import swim from '../../assets/swimming.png'
import play from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-2'>
            <h2 className="font-bold mb-3">Q-zone</h2>
            <div className='space-y-4 mx-auto'>
                <img className='w-full'src={swim} alt="" />
                <img className='w-full'src={clss} alt="" />
                <img className='w-full'src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;