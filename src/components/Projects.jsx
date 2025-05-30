import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-800 text-black">
      <h2 className="text-3xl text-stone-100 font-semibold mb-10">Projects</h2>

      {/* Crispy Bites */}
      <div className="flex items-center justify-between border-t border-gray-500 border-b py-6">
        <div className="flex items-center space-x-6">
          {/* Circle with image inside */}
          <div className="w-16 h-16 rounded-full bg-white border overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwKVd1uz_lEsR0hma_FRCcRubRQGXVXuTlMHK0PIhnLptKGSTFW8PfP_8AOrP7Ro43PQ&usqp=CAU"
              alt="Crispy Bites"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg text-stone-100 font-semibold">
              Crispy Bites
            </h3>
            <p className="text-sm italic text-stone-100">
              Fast Food Website using HTML, CSS, JS
            </p>
          </div>
        </div>
        <a
          href="https://muaazahmed03.github.io/Crispy-Bites/#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-100 w-10 h-10 rounded-full border flex items-center justify-center hover:bg-teal-300 hover:text-black transition"
        >
          →
        </a>
      </div>

      {/* Multiple Foods Restaurants */}
      <div className="flex items-center border-gray-500 justify-between border-b py-6">
        <div className="flex items-center space-x-6">
          {/* Circle video phone placeholder */}
          <div className="w-16 h-32 bg-white border rounded-2xl overflow-hidden flex items-center justify-center">
            {/* You can embed a screen recording here */}
            <video autoPlay loop muted className="h-full object-cover">
              <source
                src="/public/WhatsApp Video 2025-05-31 at 12.19.47 AM.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-100">
              Multiple Foods Restaurants
            </h3>
            <p className="text-sm italic text-stone-100">
              React Native Mobile App for food delivery
            </p>
          </div>
        </div>

        {/* Arrow Button to local FastFood.jsx */}
        <button
          onClick={() => navigate("/fastfood")}
          className="text-stone-100 w-10 h-10 rounded-full border flex items-center justify-center hover:bg-teal-300 hover:text-black transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Projects;
