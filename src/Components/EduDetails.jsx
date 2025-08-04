import eduConnect from '../assets/edu-connect.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { NavLink } from "react-router-dom";


const EduDetails = () => {
    return (
        <div className='w-4/5 mx-auto shadow-lg shadow-gray-600 mt-8 rounded-lg'>
            <div className='p-6 space-y-6'>
                <img
                    className='rounded-lg w-full shadow-md hover:scale-105 transition-transform duration-300'
                    src={eduConnect}
                    alt="Edu Connect"
                />

                <h2 className='font-bold text-3xl text-center text-green-700'>
                    Edu Connect
                </h2>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Technologies Used</h4>
                    <ul className='list-disc list-inside'>
                        <li>Frontend: Next.js, Tailwind CSS</li>
                        <li>Backend: Node.js, Express</li>
                        <li>Database: MongoDB</li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Description</h4>
                    <p>
                        <span className='font-bold'>Edu Connect</span> is a full-stack web application designed to streamline the college admission process. Users can browse a list of colleges, view detailed information about each institution, and securely apply for admission by submitting personal details and academic results. Admins can manage and update admission statuses through a protected dashboard. The platform offers features like form validation, role-based access, image uploads, and real-time status updates - all built using the MERN stack and deployed on Vercel. Edu Connect simplifies the entire college application experience for both applicants and administrators.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Challenges Faced</h4>
                    <ul className='list-disc list-inside'>
                        <li>Dynamic Route Protection</li>

                        <li>Dynamic Dashboards</li>
                        <li>Authentication</li>
            
            



                    </ul>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Potential Improvements and Future Plans</h4>
                    <ul className='list-disc list-inside'>
                        <li>Email notification</li>
                        <li>Role based access for every college moderator</li>
                        <li>Multianguage Support</li>
                        <li> AI-Based Recommendations</li>
                    </ul>
                </div>

                <div className='flex flex-wrap gap-4'>
                    <a
                        href="https://edu-connect-jet.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
                    >
                        <FaExternalLinkAlt />
                        Live Site
                    </a>

                    <a
                        href="https://github.com/mahdi056/Edu-connect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition duration-300"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>

                <div className='pt-4'>
                    <NavLink to='/'>
                        <button className='btn btn-outline btn-success'>
                            Go Back
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default EduDetails;