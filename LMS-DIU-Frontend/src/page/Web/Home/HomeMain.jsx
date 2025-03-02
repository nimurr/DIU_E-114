import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import UpcomingEvents from './HomeSections/UpcomingEvents';


const HomeMain = () => {
    return (
        <div>
            <div className='h-full bg-[url("/All/banner.webp")] w-full bg-cover bg-center'>
                {/* <marquee className='text-white bg-secondary py-1 font-semibold' behavior="scroll" direction="left" scrollamount="5">📢 বিশেষ নোটিশ:
                আমাদের আগামী পরীক্ষায় সবাই ভালো প্রস্তুতি নিয়ে আসবেন। 📢 বিশেষ নোটিশ:
                আমাদের আগামী পরীক্ষায় সবাই ভালো প্রস্তুতি নিয়ে আসবেন।  </marquee> */}
                <div className='contianer grid lg:grid-cols-2 gap-10 items-center min-h-[80vh] '>
                    <div >
                        <h4 className='sm:text-xl  font-semibold sm:mt-0 mt-10 text-gray-900'>The Best Place To Learn.</h4>
                        <h2 className='sm:text-8xl text-5xl font-bold my-5'>Welcome <br /> To DIU E114</h2>
                        <h4 className='sm:text-base  font-semibold sm:mt-0 my-5 text-gray-900'> Unity | Dedication | Skills | Growth | Success </h4>
                        <button className='flex items-center gap-2 bg-secondary py-3 px-10 rounded text-white'>Importent Notice <FaHandPointRight />
                        </button>
                    </div>
                    <div>
                        <img src="/All/hero-section.webp" alt="" />
                    </div>
                </div>


            </div>
            <UpcomingEvents />
        </div>
    );
}

export default HomeMain;
