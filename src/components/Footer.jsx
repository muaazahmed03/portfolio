import React, { useRef, useEffect } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const moveSpotlight = (e) => {
      const rect = footerRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      // Smooth delay
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${currentX}px`;
        spotlightRef.current.style.top = `${currentY}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const footer = footerRef.current;
    footer.addEventListener('mousemove', moveSpotlight);
    animate();

    return () => {
      footer.removeEventListener('mousemove', moveSpotlight);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Spotlight inside footer only */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute z-0 h-55 w-55 rounded-full bg-teal-300 opacity-20 blur-xl transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-sm">© Muaaz Ahmed, 2025</p>
        </div>

        <div className="flex items-center space-x-5">
          <a
            href="https://www.instagram.com/muaaz_ahmed_03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            Facebook
          </a>
          <a
            href="/resume.pdf" // Replace with actual path
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
