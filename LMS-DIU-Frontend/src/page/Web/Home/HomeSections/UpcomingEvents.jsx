import React from 'react';

const UpcomingEvents = () => {
    return (
        <div className='contianer'>
            <h1 className='text-5xl font-semibold text-center my-10'>Upcoming Events</h1>
            <div>
                <div className='flex items-center gap-2 my-5'>
                    <div className='bg-[#038c6d] min-w-28 text-center py-5'>
                        <h2 className='text-4xl text-white'>01</h2>
                        <h3 className='text-2xl text-white'>Nov</h3>
                    </div>
                    <div className='bg-secondary text-white p-5 w-full'>
                        <h2 className='text-3xl font-semibold mb-2'>Event Name</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 my-5'>
                    <div className='bg-[#038c6d] min-w-28 text-center py-5'>
                        <h2 className='text-4xl text-white'>01</h2>
                        <h3 className='text-2xl text-white'>Nov</h3>
                    </div>
                    <div className='bg-secondary text-white p-5 w-full'>
                        <h2 className='text-3xl font-semibold mb-2'>Event Name</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 my-5'>
                    <div className='bg-[#038c6d] min-w-28 text-center py-5'>
                        <h2 className='text-4xl text-white'>01</h2>
                        <h3 className='text-2xl text-white'>Nov</h3>
                    </div>
                    <div className='bg-secondary text-white p-5 w-full'>
                        <h2 className='text-3xl font-semibold mb-2'>Event Name</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;
