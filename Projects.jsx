"use client"
import { useNavigate } from "react-router-dom"

const Projects = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-4 sm:px-8 py-16 bg-gray-800 text-black w-full overflow-x-hidden">
      <h2 className="text-3xl text-stone-100 font-semibold mb-10 break-words">Projects</h2>

      {/* Crispy Bites */}
      <div className="flex items-center justify-between border-t border-gray-500 border-b py-6 w-full">
        <div className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0">
          {/* Circle with image inside */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border overflow-hidden flex-shrink-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwKVd1uz_lEsR0hma_FRCcRubRQGXVXuTlMHK0PIhnLptKGSTFW8PfP_8AOrP7Ro43PQ&usqp=CAU"
              alt="Crispy Bites"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg text-stone-100 font-semibold break-words">Crispy Bites</h3>
            <p className="text-sm italic text-stone-100 break-words">Fast Food Website using HTML, CSS, JS</p>
          </div>
        </div>
        <a
          href="https://muaazahmed03.github.io/Crispy-Bites/#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center hover:bg-teal-300 hover:text-black transition flex-shrink-0 ml-4"
        >
          →
        </a>
      </div>

      {/* Multiple Foods Restaurants */}
      <div className="flex items-center border-gray-500 justify-between border-b py-6 w-full">
        <div className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0">
          {/* Circle video phone placeholder */}
          <div className="w-12 h-24 sm:w-16 sm:h-32 bg-white border rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0">
            {/* You can embed a screen recording here */}
            <video autoPlay loop muted className="h-full w-full object-cover">
              <source src="/food-app-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-stone-100 break-words">Multiple Foods Restaurants</h3>
            <p className="text-sm italic text-stone-100 break-words">React Native Mobile App for food delivery</p>
          </div>
        </div>

        {/* Arrow Button to local FastFood.jsx */}
        <button
          onClick={() => navigate("/fastfood")}
          className="text-stone-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center hover:bg-teal-300 hover:text-black transition flex-shrink-0 ml-4"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Projects
