import React from "react";
import bg from "../../assets/serImg1.png";
import { useNavigate } from "react-router-dom";

const FilmProduction = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#fefaf5] text-gray-800 font-serif px-6 py-10 overflow-hidden">
      {/* --- Background texture --- */}
      <div className="absolute inset-0 bg-[url('/images/texture.png')] bg-cover bg-center opacity-50"></div>

      {/* --- Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto mt-10">
        {/* Back button */}
        <button
          onClick={() =>
            window.history.length > 1 ? navigate(-1) : navigate("/service")
          }
          className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition mb-6"
        >
          ← Back
        </button>

        {/* Quote */}
        <h1 className="text-2xl md:text-3xl italic text-center mb-12">
          “Filmmaking is a chance to live many lifetimes.” – Robert Altman
        </h1>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="border border-gray-300 rounded-md shadow-lg p-2 bg-white">
              <img
                src={bg}
                alt="Film Production"
                className="rounded-md w-[250px] object-cover"
              />
              <p className="text-center mt-3 text-lg">Film Production</p>
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg md:w-1/2 space-y-4 leading-relaxed">
            <p>
              Who says films are just an escape? We see them as a way to live
              many lives – to feel, to explore, and to tell stories that stay.
              And with each film, we carry new memories and new reasons to keep
              creating.
            </p>
            <p>V crafts:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>
          </div>
        </div>

        {/* Explore Now button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/branding")}
            className="flex items-center gap-2 text-gray-800 font-medium hover:text-orange-600 transition"
          >
            Explore Now →
          </button>
        </div>
      </div>

      {/* --- Decorative Icons --- */}
      <img
        src="/images/camera1.png"
        className="absolute bottom-10 left-10 w-16 opacity-70"
        alt=""
      />
      <img
        src="/images/camera2.png"
        className="absolute top-28 right-10 w-16 opacity-70"
        alt=""
      />
      <img
        src="/images/camera3.png"
        className="absolute bottom-20 right-20 w-20 opacity-70"
        alt=""
      />
    </div>
  );
};

export default FilmProduction;
