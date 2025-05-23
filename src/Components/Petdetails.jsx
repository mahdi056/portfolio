import { NavLink } from "react-router-dom";
import pet from '../assets/pet.png'

const Petdetails = () => {
    return (
        <div>

        <div className='w-4/5 mx-auto shadow-lg shadow-gray-600 mt-4'>

        <div className='space-y-4 px-4'>
            <img className='rounded-lg' src={pet} alt="" />
            <h2 className='font-bold text-2xl text-center text-green-600'>Pet Haven</h2>
            <h4 className='text-xl font-bold'>Technologies Used</h4>
            <p>Frontend: React, Tailwind CSS</p>
            <p>Backend: Node.js, Express</p>
            <p>Database: MongoDB</p>

            <p><span className='font-bold'>Description: </span>Pet Haven is a web-based pet adoption and donation platform where users can add pets for adoption, browse available pets, request adoptions, and support animal welfare through donation campaigns. It features secure authentication, real-time pet listings, and Stripe-based donations, allowing users to manage their pets, campaigns, and donations.</p>

            <p><span className='font-bold'>Live project link:</span> https://pet-haven-f3d61.web.app/</p>
            <p><span className='font-bold'>GitHub repository link: </span>https://github.com/mahdi056/pet-haven</p>
            <p><span className='font-bold'>Challenges faced: </span> During the development of Pet Haven, key challenges included implementing secure and persistent user authentication, managing image uploads through third-party services like imgbb, and integrating Stripe for safe and smooth donation transactions. Ensuring responsive design and intuitive navigation across the dashboard, handling asynchronous data fetching, and maintaining state consistency were also complex.</p>
            <p><span className='font-bold'>Potential improvements and future plans for the project: </span>To enhance Pet Haven, future improvements could include implementing real-time chat between adopters and pet owners, adding a review and rating system for pets and campaigns, and integrating a mobile app version for wider accessibility. </p>
        </div>
        <NavLink to='/'><button className='btn btn-outline btn-success mt-4 ml-4'>Go Back</button></NavLink>
        </div>
            
        </div>
    );
};

export default Petdetails;