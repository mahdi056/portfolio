import { NavLink } from "react-router-dom";
import pet from '../assets/pet.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Petdetails = () => {
    return (
        <div className='w-4/5 mx-auto shadow-lg shadow-gray-600 mt-8 rounded-lg'>
            <div className='p-6 space-y-6'>
                <img
                    className='rounded-lg w-full shadow-md hover:scale-105 transition-transform duration-300'
                    src={pet}
                    alt="Pet Haven"
                />

                <h2 className='font-bold text-3xl text-center text-green-700'>
                    Pet Haven
                </h2>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Technologies Used</h4>
                    <ul className='list-disc list-inside'>
                        <li>Frontend: React, Tailwind CSS</li>
                        <li>Backend: Node.js, Express</li>
                        <li>Database: MongoDB</li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Description</h4>
                    <p>
                        <span className='font-bold'>Pet Haven</span> is a web-based pet adoption and donation platform that allows users to add pets for adoption, browse listings, request adoptions, and support animal welfare through campaigns. With secure authentication and Stripe-based donations, it ensures smooth pet and campaign management via a user-friendly dashboard.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Challenges Faced</h4>
                    <ul className='list-disc list-inside'>
                        <li>Secure & Persistent Authentication</li>
                        <li>Image Upload via imgbb Integration</li>
                        <li>Stripe Payment Gateway Integration</li>
                        <li>Responsive Dashboard Design</li>
                        <li>Asynchronous Data Handling</li>
                        <li>State Management & Consistency</li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Potential Improvements and Future Plans</h4>
                    <ul className='list-disc list-inside'>
                        <li>Real-Time Chat Between Adopters & Owners</li>
                        <li>Review and Rating System</li>
                        <li>Mobile App Integration</li>
                    </ul>
                </div>

                <div className='flex flex-wrap gap-4'>
                    <a
                        href="https://pet-haven-f3d61.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
                    >
                        <FaExternalLinkAlt />
                        Live Site
                    </a>

                    <a
                        href="https://github.com/mahdi056/pet-haven"
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

export default Petdetails;
