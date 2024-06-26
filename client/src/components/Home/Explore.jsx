import React from "react";
import { NavLink } from "react-router-dom";
import Music from "../../imageAssets/Music.png";
import Culinary from "../../imageAssets/Cooking.png";
import Technology from "../../imageAssets/Technology.png";
import Fitness from "../../imageAssets/Fitness.png";
import Arts from "../../imageAssets/Arts.png";
import Speaking from "../../imageAssets/Public.png";

const Explore = () => {
  const Categories = [
    {
      id: 1,
      image: Music,
      title: "Music",
    },
    {
      id: 2,
      image: Culinary,
      title: "Cooking",
    },
    {
      id: 3,
      image: Technology,
      title: "Programming",
    },
    {
      id: 4,
      image: Fitness,
      title: "Fitness",
    },
    {
      id: 5,
      image: Arts,
      title: "Art & Craft",
    },
    {
      id: 6,
      image: Speaking,
      title: "Public Speaking",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center m-14 overflow-hidden">
      {/* explore skills upper div */}
      <h2 className="text-3xl mb-5 font-bold text-black">Explore Skills</h2>
      {/* paragraph div */}
      <div className="hidden lg:block lg:my-4 lg:mb-6 lg:w-[50%] lg:text-center">
        {" "}
        {/* Shown on large devices */}
        <p className="text-center">
          Discover thousands of on-demand classes in design, business,
          technology, photography, and more. Find what sparks your curiosity.
        </p>
      </div>

      {/* all skill category grid */}
      <div className="flex justify-center items-center flex-wrap gap-y-8 gap-x-16 w-full mb-5">
        {Categories.map((category) => (
          // a particular skill
          <NavLink
            to={`/explore?query=${category.title}`}
            key={category.id}
            className="w-40  hover:scale-110 transition-all ease-in-out duration-300"
          >
            <div>
              {/* image  */}
              <img
                src={category.image}
                alt="category"
                loading="lazy"
                className="rounded-md object-cover"
              />
              {/* skill title */}
              <div className="flex justify-center items-center text-s">
                {category.title}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Explore;
