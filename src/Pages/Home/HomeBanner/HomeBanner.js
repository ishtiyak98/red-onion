import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className='bg-container px-6 lg:px-20 lg:pt-28'>
            <div className='main-banner w-full h-[400px] lg:h-[660px]'>
                <div className='flex justify-center pt-28'>
                    <div className=''>
                        <h1 className='text-xl text-center lg:text-[40px] text-slate-800 font-medium mt-10 mb-12'>Best food waiting for your belly</h1>
                        <center>
                            <input className='mb-5 px-6 text-xl w-[320px] rounded-full mr-5 outline-none border-transparent focus:border-transparent focus:ring-2 focus:ring-red-500' type="text" name="" id="" />
                            <button className='px-6 py-2 text-white font-semibold text-lg bg-red-500 border-2 border-red-500 hover:bg-transparent hover:text-red-500 rounded-full'>Search</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;