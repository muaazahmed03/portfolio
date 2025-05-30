import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 md:px-16 overflow-x-hidden"
      style={{ background: '#04030c', color: 'white' }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-300"
        data-aos="fade-down"
      >
        About Me
        <div className="w-20 h-1 bg-teal-600 mt-2 mx-auto"></div>
      </h2>

      <p
        className="text-center max-w-5xl mx-auto text-lg md:text-xl leading-relaxed tracking-wide"
        data-aos="fade-up"
      >
        Greetings! I am <span className="text-teal-300 font-semibold">Muaaz Ahmed Baig</span>, a passionate <span className="text-teal-300 font-semibold">MERN Stack Developer</span> based in Karachi, Pakistan. I specialize in building modern web and mobile applications using <span className="text-teal-300 font-semibold">React.js, Node.js, Express.js, and MongoDB</span>. My journey also includes exploring C++, C#, SQL, and Unity during my academic career.
        <br /><br />
        With a strong foundation in Mern-stack JavaScript, I develop dynamic, scalable, and responsive applications. My skills extend to cross-platform mobile app development using <span className="text-teal-300 font-semibold">React Native</span>, helping me deliver seamless user experiences. I’m constantly evolving with new tech, aiming to create impactful and innovative solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-lg max-w-4xl mx-auto">
        <div className="space-y-4" data-aos="fade-right">
          <p><span className="text-teal-300 font-bold">Degree:</span> Bachelors in Computer Science</p>
          <p><span className="text-teal-300 font-bold">City:</span> Karachi, Pakistan</p>
          <p><span className="text-teal-300 font-bold">Phone:</span> +92 3132332015</p>
        </div>
        <div className="space-y-4" data-aos="fade-left">
          <br />
          <p><span className="text-teal-300 font-bold">Birthday:</span> 03-May-2002</p>
          <p><span className="text-teal-300 font-bold">Email:</span> muaazahmed0111@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default About;
