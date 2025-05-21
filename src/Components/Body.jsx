import logo from '../assets/logo.png'
import photo from '../assets/profile.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import sms from '../assets/SMS.png'
import artifact from '../assets/Artifact.png'
import visa from '../assets/Visa.png'
import { NavLink } from 'react-router-dom';

const Body = () => {
    return (
        <div>

            {/* Navbar */}

            <div className="navbar bg-base-100 sticky top-0 z-10 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#home'>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#home'>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                    href='/Mahdi-Resume.pdf' 
                    download
                    className="btn btn-outline btn-success">RESUME</a>
                </div>
            </div>
            {/* Navbar end */}


            {/* Home */}

            <section id='home' className='flex flex-col md:flex-row justify-around items-center mt-8'>
                <div className='space-y-4'>
                    <p>Hi, I am</p>
                    <h2 className='text-4xl font-bold'>Ahnaf Chowdhury Mahdi</h2>
                    <h2 className="text-xl font-bold text-green-500">
                        <Typewriter
                            words={['Frontend Developer', 'UI/UX Designer']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>

                    <div className='flex gap-x-2'>
                        <a href="https://www.facebook.com/share/1EJws33CrU/"><FaFacebook></FaFacebook></a>
                        <a href="https://www.linkedin.com/in/ahnaf-chowdhury-mahdi-83b12630b/"><FaLinkedinIn></FaLinkedinIn></a>
                        <a href="https://github.com/mahdi056"><FaGithub></FaGithub></a>
                    </div>

                     <a
                    href='/Mahdi-Resume.pdf' 
                    download
                    className="btn btn-outline btn-success">RESUME</a>
                </div>



                <div>
                    <img className='w-96 rounded-full' src={photo} alt="" />
                </div>
            </section>

            {/* About Me section*/}

            <section id="about" className="py-12 mt-8">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-4"> About Me</h2>
                    <p className="text-lg">
                        Hi! I'm Ahnaf Chowdhury Mahdi, a passionate Frontend Developer.
                        I specialize in creating interactive, user-friendly, and visually appealing web applications. With expertise in React, Tailwind CSS, and JavaScript, I focus on building responsive, high-performance websites that enhance user experience. I love learning new technologies.

                        Beyond coding, I enjoy playing cricket and bike riding, which fuel my creativity and problem-solving skills.

                    </p>
                </div>
            </section>

            {/* Skills Section  */}

            <section id='skills' classname=''>
                <h2 className='text-center font-bold text-4xl mb-4'>Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-6 place-items-center'>
                    <FaHtml5 className='text-orange-700' size={80}></FaHtml5>
                    <FaCss3Alt className='text-blue-600' size={80}></FaCss3Alt>
                    <TbBrandJavascript className='text-yellow-600' size={80}></TbBrandJavascript>
                    <FaReact className='text-cyan-500' size={80}></FaReact>
                    <DiMongodb className='text-green-600' size={80}></DiMongodb>
                    <FaNodeJs className='text-green-400' size={80}></FaNodeJs>



                </div>

            </section>


            {/* Education */}

            <section id='education' className='mt-16 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-4'>Education</h2>

                <div className="shadow-lg shadow-gray-600 p-6 rounded-lg text-center w-4/5 mx-auto">
                    <h3 className="text-2xl font-semibold">Higher Secondary Certificate (HSC)</h3>
                    <p className= "mt-2">Successfully completed my HSC with dedication and excellence.</p>
                </div>
            </section>

            {/* Projects */}

            <h2 className='text-4xl font-bold mt-16 text-center'>Projects</h2>
            <section id='projects' className='mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-8 mx-4'>



                <div className='flex gap-x-4 shadow-lg shadow-gray-600'> 
                    <img className='w-48 h-32 rounded-lg' src={sms} alt="" />

                    <div className='flex flex-col items-center justify-center gap-y-4 w-96'>
                        <h2>Scholarship Management System</h2>
                       <NavLink to='/scholarship'> <button className='btn btn-outline btn-success'>View More</button></NavLink>
                    </div>
                </div>

                <div className='flex gap-x-4 shadow-lg shadow-gray-600'> 
                    <img className='w-48 h-32 rounded-lg' src={artifact} alt="" />

                    <div className='flex flex-col items-center justify-center gap-y-4 w-96'>
                        <h2>Artifact Atlas</h2>
                        <NavLink to='/artifact'> <button className='btn btn-outline btn-success'>View More</button></NavLink>
                    </div>
                </div>

                <div className='flex gap-x-4 shadow-lg shadow-gray-600'> 
                    <img className='w-48 h-32 rounded-lg' src={visa} alt="" />

                    <div className='flex flex-col items-center justify-center gap-y-4 w-96'>
                        <h2>Visa Portal</h2>
                        <NavLink to='/visa'> <button className='btn btn-outline btn-success'>View More</button></NavLink>
                    </div>
                </div>

                
            </section>

            {/* Contact */}

            <section id='contact'>

                <h2 className='text-4xl font-bold mt-16'>Contact</h2>

                <p className='mt-4'><span className='font-bold'>Email:</span> ahnafmahdi12@gmail.com</p>
                <p><span className='font-bold'>Phone:</span> +880 1707226784</p>
            </section>





        </div>
    );
};

export default Body;