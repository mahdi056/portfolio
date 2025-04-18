import { NavLink } from 'react-router-dom';
import visa from '../assets/Visa.png'
const Visadetails = () => {
    return (
        <div className='w-4/5 mx-auto shadow-lg shadow-gray-600 mt-4'>
        
        <div className='space-y-4'>
            <img className='rounded-lg' src={visa} alt="" />
            <h2 className='font-bold text-2xl text-center text-green-600'>Visa Portal</h2>
            <h4 className='text-xl font-bold'>Technologies Used</h4>
            <p>Frontend: React, Tailwind CSS</p>
            <p>Backend: Node.js, Express</p>
            <p>Database: MongoDB</p>

            <p><span className='font-bold'>Description: </span>This Visa Management System is an efficient platform where users can easily explore various visa options, view detailed information about each visa type, and conveniently apply for their desired visa. With a simple and user-friendly interface, this website provides an effortless experience for individuals seeking to travel abroad. Whether you're applying for a tourist, student, or work visa, the platform ensures a smooth and transparent process from start to finish. Additionally, the system offers helpful guidance, clear instructions, and real-time application tracking to make the entire visa application journey hassle-free. </p>

            <p><span className='font-bold'>Live project link:</span> https://assignment-10-86b1b.web.app/home</p>
            <p><span className='font-bold'>GitHub repository link: </span>https://github.com/mahdi056/A-10</p>
            <p><span className='font-bold'>Challenges faced: </span>Handling Multiple Visa Types, Secure User Authentication, Document Upload & Verification,User Data Privacy and Protection.</p>
            <p><span className='font-bold'>Potential improvements and future plans for the project: </span>Payment Gateway Integration for Visa Fees, Real-Time Visa Status Tracking, Integration with Government Databases, AI-Powered Visa Recommendation System, Multi-Country Visa Comparison, Automated Document Verification, User-Friendly Dashboard for Application Tracking, Multi-Language Support,</p>
        </div>
            <NavLink to='/'><button className='btn btn-outline btn-success mt-4'>Go Back</button></NavLink>
        </div>
    );
};

export default Visadetails;