import React from 'react';

const AllTeachers = () => {
    // Sample student data
    const students = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://via.placeholder.com/50',
            studentId: 'S12345',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Smith',
            image: 'https://via.placeholder.com/50',
            studentId: 'S12346',
            email: 'jane.smith@example.com'
        },
        {
            id: 3,
            name: 'Sam Wilson',
            image: 'https://via.placeholder.com/50',
            studentId: 'S12347',
            email: 'sam.wilson@example.com'
        },
        {
            id: 4,
            name: 'Emma Brown',
            image: 'https://via.placeholder.com/50',
            studentId: 'S12348',
            email: 'emma.brown@example.com'
        },
        {
            id: 5,
            name: 'Olivia Johnson',
            image: 'https://via.placeholder.com/50',
            studentId: 'S12349',
            email: 'olivia.johnson@example.com'
        }
    ];

    const handleViewDetails = (studentId) => {
        alert(`Viewing details for Student ID: ${studentId}`);
        // You can add logic to route to a detailed page or open a modal with more details.
    };

    return (
        <div className="contianer">
            <div className='flex items-center justify-between my-10'>
                <h1 className="text-3xl font-bold ">All Teachers</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search Name or ID"
                        className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />
                </div>
            </div>
            <div className="overflow-x-auto bg-white shadow-sm ">
                <table className="table-auto  w-full text-left border-collapse">
                    <thead className='bg-[#038c6d]'>
                        <tr>
                            <th className="py-3 px-4 border-b text-white">Sl</th>
                            <th className="py-3 px-4 border-b text-white">Image</th>
                            <th className="py-3 px-4 border-b text-white">Name</th>
                            <th className="py-3 px-4 border-b text-white">Email</th>
                            <th className="py-3 px-4 border-b text-white    ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id} className="border-b">
                                <td className="py-3 px-4">{student.id}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={'https://img.icons8.com/?size=96&id=108296&format=png'}
                                        alt={student.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4">{student.name}</td>
                                <td className="py-3 px-4">{student.email}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleViewDetails(student.studentId)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllTeachers;
