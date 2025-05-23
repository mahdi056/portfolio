import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qyx19zh',
        'template_o73sf3h',
        form.current,
        'DPpGd6oEJx7vfe9zF'
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="py-16 px-4">
  <ToastContainer />
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold mb-4 text-gray-400">Let's Connect</h2>
    <p className="text-gray-400 mb-10">
      I'd love to hear from you! Fill out the form and I’ll get back to you as soon as possible.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-left">
      {/* Left side contact info with icons */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <FaEnvelope className="text-xl text-green-600" />
          <a
            href="mailto:ahnafmahdi12@gmail.com"
            className="text-gray-400 hover:text-green-600"
          >
            ahnafmahdi12@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FaMapMarkerAlt className="text-xl text-green-600" />
          <span className="text-gray-400">Sylhet, Bangladesh</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FaLinkedin className="text-xl text-green-600" />
          <a
            href="https://www.linkedin.com/in/ahnafmahdi12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-xl text-green-600" />
          <a
            href="https://github.com/mahdi056"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right side contact form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6"
        noValidate
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

  );
};

export default ContactUs;
