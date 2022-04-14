import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className='main-banner w-full h-[400px] lg:h-[660px]'>
            <div className='flex justify-center pt-28'>
                <div className=''>
                    <h1 className='text-2xl text-center lg:text-5xl text-slate-800 font-semibold my-10 '>Best food waiting for your belly</h1>
                    <center>
                        <input className='mb-5 px-6 text-xl w-[420px] rounded-full mr-5 outline-none border-transparent focus:border-transparent focus:ring-2 focus:ring-red-500' type="text" name="" id="" />
                        <button className='px-8 py-2 text-white font-semibold text-xl bg-red-500 border-2 border-red-500 hover:bg-transparent hover:text-red-500 rounded-full'>Search</button>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;