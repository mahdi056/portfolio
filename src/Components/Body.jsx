
import sms from '../assets/SMS.png'
import eduConnect from '../assets/edu-connect.png'
import pet from '../assets/pet.png'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from './Skills';
import { FaGraduationCap } from 'react-icons/fa';
import { FaFileCode } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactUs from './ContactUs';
const Body = () => {
    return (
        <div>

            {/* Navbar */}

         <div className='sticky top-0'>
              <Navbar ></Navbar>
         </div>
            {/* Navbar end */}


            {/* Home */}

            <Home></Home>

           {/* home end */}

            {/* About Me section*/}

            <AboutMe></AboutMe>

            {/* about me end  */}

            {/* Skills Section  */}

            <Skills></Skills>

            {/* Skills end */}

           

            {/* Education */}

            <section id='education' className='mt-16 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-4 flex justify-center items-center gap-x-2'><FaGraduationCap></FaGraduationCap>Education</h2>

                <div className="shadow-sm shadow-gray-600 p-6 rounded-lg text-center w-4/5 mx-auto">
                    <h3 className="text-2xl font-semibold">Higher Secondary Certificate (HSC)</h3>
                    <p className= "mt-2">Successfully completed my HSC with dedication and excellence.</p>
                </div>
            </section>

            {/* Projects */}

            <h2 className='text-4xl font-bold mt-16 text-center flex justify-center items-center gap-x-2'> <FaFileCode></FaFileCode> Projects</h2>

            <section id='projects' className='mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-8 mx-4'>



                <div className='flex flex-col justify-between items-center shadow-lg shadow-gray-600 p-8 gap-y-4 w-80'> 
                    <img className='w-48 h-32 rounded-lg' src={sms} alt="" />

                    <div className='mt-8'>
                        <h2>Scholarship Management System</h2>
                       
                    </div>
                    <div>
                        <NavLink to='/scholarship'> <button className='btn btn-outline btn-success'>View More</button></NavLink>
                    </div>
                </div>

                   <div className='flex flex-col justify-between items-center shadow-lg shadow-gray-600 p-8 gap-y-4 w-80'> 
                    <img className='w-48 h-32 rounded-lg' src={pet} alt="" />

                    <div className='mt-8'>
                        <h2>Pet Haven</h2>
                       
                    </div>
                    <div>
                        <NavLink to='/pet'> <button className='btn btn-outline btn-success'>View More</button></NavLink>
                    </div>
                </div>

                 <div className='flex flex-col justify-between items-center shadow-lg shadow-gray-600 p-8 gap-y-4 w-80'> 
                    <img className='w-48 h-32 rounded-lg' src={eduConnect} alt="" />

                    <div className='mt-8'>
                        <h2>Edu Connect</h2>
                       
                    </div>
                    <div>
                        <NavLink to='/edudetails'> <button className='btn btn-outline btn-success'>View More</button></NavLink>
                    </div>
                </div>

                
            </section>

            {/* Contact */}

         <ContactUs></ContactUs>

           <div className="text-center text-sm text-gray-400 py-4">
          &copy; {new Date().getFullYear()} Ahnaf Mahdi. All rights reserved.
        </div>


        </div>
    );
};

export default Body;