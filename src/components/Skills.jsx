import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', desc: 'Structure for web content', img: 'https://img.icons8.com/color/96/html-5.png' },
  { name: 'CSS', desc: 'Styling the web visually', img: 'https://img.icons8.com/color/96/css3.png' },
  { name: 'JavaScript', desc: 'Dynamic interactivity on websites', img: 'https://img.icons8.com/color/96/javascript.png' },
  { name: 'TypeScript', desc: 'JavaScript with type safety', img: 'https://img.icons8.com/color/96/typescript.png' },
  { name: 'React JS', desc: 'Building user interfaces', img: 'https://img.icons8.com/officel/96/react.png' },
  { name: 'Redux', desc: 'State management for React', img: 'https://img.icons8.com/color/96/redux.png' },
  { name: 'Node JS', desc: 'Server-side JavaScript runtime', img: 'https://img.icons8.com/color/96/nodejs.png' },
  { name: 'Express JS', desc: 'Fast backend framework for Node', img: 'https://img.icons8.com/color/512/express-js.png' },
  { name: 'MongoDB', desc: 'NoSQL database solution', img: 'https://img.icons8.com/color/96/mongodb.png' },
  { name: 'React Native', desc: 'Mobile apps using React', img: 'https://img.icons8.com/color/96/react-native.png' },
  { name: 'Firebase', desc: 'Backend services and auth', img: 'https://img.icons8.com/color/96/firebase.png' },
  { name: 'BootStrap', desc: 'CSS framework for layout', img: 'https://img.icons8.com/color/96/bootstrap.png' },
  { name: 'Material UI', desc: 'React UI components', img: 'https://img.icons8.com/?size=512&id=gFw7X5Tbl3ss&format=png' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', img: 'https://img.icons8.com/color/96/tailwind_css.png' },
  { name: 'React Native Paper', desc: 'UI library for RN apps', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFNml5PoLN3JVTKF0rfMyeHXzuj0R0aMPfg&s' },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl text-stone-100 font-semibold mb-6">Skills</h2>
      <div className="border-t border-gray-500 mb-4"></div>
      <div className="space-y-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between border-b border-gray-500 pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0 }}
            variants={index % 2 === 0 ? fadeLeft : fadeRight}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-stone-100">{skill.name}</h3>
                <p className="italic text-sm text-stone-100">{skill.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
