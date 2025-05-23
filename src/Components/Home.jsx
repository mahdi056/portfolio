import photo from '../assets/profile.jpg'
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <section
            id='home'
            className='min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-10'
        >
            {/* Text Content */}
            <div className='space-y-5 text-center md:text-left'>
                <p className='text-lg text-gray-400'>Hi, I am</p>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-400'>Ahnaf Chowdhury Mahdi</h2>
                <h3 className="text-2xl font-semibold text-green-600">
                    <Typewriter
                        words={['Frontend Developer', 'UI/UX Designer']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>

                {/* Social Links */}
                <div className='flex justify-center md:justify-start gap-4 text-2xl text-gray-600'>
                    <a href="https://www.facebook.com/share/1EJws33CrU/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='hover:text-green-500 duration-300' />
                    </a>
                    <a href="https://www.linkedin.com/in/ahnaf-chowdhury-mahdi-83b12630b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='hover:text-green-500 duration-300' />
                    </a>
                    <a href="https://github.com/mahdi056" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='hover:text-green-500 duration-300' />
                    </a>
                </div>

                {/* Resume Button */}
                <div>
                    <a
                        href='/Mahdi-Resume.pdf'
                        download
                        className="btn btn-outline btn-success"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div>
                <img
                    className='w-72 md:w-96 rounded-full ring-4 ring-green-500 shadow-lg'
                    src={photo}
                    alt="Profile"
                />
            </div>
        </section>
    );
};

export default Home;
