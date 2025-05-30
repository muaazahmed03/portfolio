import { useEffect, useRef, useState } from "react";
import "../index.css";

const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const spotlightRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const spotlight = spotlightRef.current;
    const x = e.clientX;
    const y = e.clientY;
    spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(48, 183, 236, 0.4), transparent 60%)`;
  };

  return (
    <section
      className="h-screen w-full relative overflow-hidden overflow-x-hidden text-zinc-200 font-sans"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-0 transition-all duration-300 ease-out pointer-events-none"
      ></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-16 space-y-4 sm:space-y-6">
        <p className="text-sm sm:text-md md:text-lg text-zinc-200">
          Based in Karachi → <span className="font-bold">{time}</span>
        </p>
        <hr className="w-3/4 sm:w-4/5 border-zinc-400" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi, this is Muaaz.
        </h1>
        <div className="space-y-1 sm:space-y-2 text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
          <p>Currently → <strong>MERN Stack Web & App Developer</strong></p>
          <p>Familiar with → C++, C#, SQL Database, and Unity</p>
          <p>Delivering → MERN Stack Web & App Solutions</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
