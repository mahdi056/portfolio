import { FaInfoCircle } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <div>

              <section id="about" className="py-12 mt-8">
                            <div className="max-w-4xl mx-auto text-center px-6">
                                <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-x-2"><FaInfoCircle></FaInfoCircle> About Me</h2>
                                <p className="text-lg">
                                    Hi! I'm Ahnaf Chowdhury Mahdi, a passionate Frontend Developer.
                                    I specialize in creating interactive, user-friendly, and visually appealing web applications. With expertise in React, Tailwind CSS, and JavaScript, I focus on building responsive, high-performance websites that enhance user experience. I love learning new technologies.
            
                                    Beyond coding, I enjoy playing cricket and bike riding, which fuel my creativity and problem-solving skills.
            
                                </p>
                            </div>
                        </section>
            
        </div>
    );
};

export default AboutMe;