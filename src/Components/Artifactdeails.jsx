import { NavLink } from 'react-router-dom';
import artifact from '../assets/Artifact.png'

const Artifactdeails = () => {
    return (
        <div className='w-4/5 mx-auto shadow-lg shadow-gray-600 mt-4'>
        
                <div className='space-y-4'>
                    <img className='rounded-lg' src={artifact} alt="" />
                    <h2 className='font-bold text-2xl text-center text-green-600'>Artifact Atlas</h2>
                    <h4 className='text-xl font-bold'>Technologies Used</h4>
                    <p>Frontend: React, Tailwind CSS</p>
                    <p>Backend: Node.js, Express</p>
                    <p>Database: MongoDB</p>
        
                    <p><span className='font-bold'>Description: </span>Artifact Atlas is an interactive platform where users can explore a vast collection of historical artifacts from different eras and cultures. After successful registration, users can view detailed information, like artifacts, and even contribute by adding their own discoveries. With an intuitive and user-friendly interface, Artifact Atlas makes history accessible to everyone, fostering a community of enthusiasts passionate about preserving and appreciating the past. Whether you're a researcher, a student, or simply curious about history, this platform offers a seamless way to discover and engage with remarkable artifacts from around the world. </p>
        
                    <p><span className='font-bold'>Live project link:</span> https://assignment-11-fd5e9.web.app/home</p>
                    <p><span className='font-bold'>GitHub repository link: </span>https://github.com/mahdi056/A-11</p>
                    <p><span className='font-bold'>Challenges faced: </span> Efficient Artifact Filtering & Search, User Authentication & Security, Image Handling & Validation, Data Integrity & Moderation, Performance Optimization, Database Management.</p>
                    <p><span className='font-bold'>Potential improvements and future plans for the project: </span>Advanced Artifact Recommendation, Artifact Verification System, Enhanced User Interaction, Real-Time Collaboration, Multi-Language Support.</p>
                </div>
                    <NavLink to='/'><button className='btn btn-outline btn-success mt-4'>Go Back</button></NavLink>
                </div>
    );
};

export default Artifactdeails;