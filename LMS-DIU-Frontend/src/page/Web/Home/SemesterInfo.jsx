import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SemesterInfo = () => {
    const { id } = useParams();
    return (
        <div className='contianer'>
            <h1 className='text-3xl text-center text-secondary my-10'>Semester - {id}</h1>
            <div>
                <h2 className='text-xl mb-5'>All Subject</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-5'>
                    {
                        [...Array(5)].map((_, index) => (
                            <Link to={`/web/book-info/${++index}`} className=' bg-gradient-to-l from-webPrimary to-[#054250] text-white rounded-lg p-5 cursor-pointer'>
                                <div>
                                    <h2 className='text-3xl mb-5 text-center'>DSA</h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total PDF : <span>5</span></h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total Class Test : <span>5</span></h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total Assignment : <span>5</span></h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total Online Class : <span>5</span></h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total Mid Exam Suggestion : <span>NO</span></h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total Final Exam Suggestion : <span>NO</span></h2>
                                    <h2 className=' my-2 flex items-center justify-between '>Total Others : <span>NO</span></h2>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SemesterInfo;
