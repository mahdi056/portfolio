import { NavLink } from 'react-router-dom';
import sms from '../assets/SMS.png'

const Scholarship = () => {
    return (
        <div className='w-4/5 mx-auto shadow-lg shadow-gray-600 mt-4'>

        <div className='space-y-4 px-4'>
            <img className='rounded-lg' src={sms} alt="" />
            <h2 className='font-bold text-2xl text-center text-green-600'>Scholarship Management System</h2>
            <h4 className='text-xl font-bold'>Technologies Used</h4>
            <p>Frontend: React, Tailwind CSS</p>
            <p>Backend: Node.js, Express</p>
            <p>Database: MongoDB</p>

            <p><span className='font-bold'>Description: </span>Scholarship Management System is where the user can explore lots of scholarships. Students find lots of benefit from this website. They can easily apply for there suitable scholarship.It is a user friendly platform. It is an innovative platform designed to help students explore and apply for a wide range of scholarships with ease. This system simplifies the scholarship search process, making it more accessible and efficient for students worldwide.</p>

            <p><span className='font-bold'>Live project link:</span> https://assignment-12-e037d.web.app/home</p>
            <p><span className='font-bold'>GitHub repository link: </span>https://github.com/mahdi056/A-12</p>
            <p><span className='font-bold'>Challenges faced: </span> Efficient Scholarship Filtering, User Authentication & Security, Payment Integration, Database Management.</p>
            <p><span className='font-bold'>Potential improvements and future plans for the project: </span>Advanced Scholarship Matching, Document Verification System, Enhanced Payment Options</p>
        </div>
        <NavLink to='/'><button className='btn btn-outline btn-success mt-4 ml-4'>Go Back</button></NavLink>
        </div>
    );
};

export default Scholarship;