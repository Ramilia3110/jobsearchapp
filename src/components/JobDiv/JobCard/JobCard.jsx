import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { motion } from "framer-motion";

const JobCard = ({ id, image, title, time, location, desc, company }) => {
  return (
    <motion.div
      key={id}
      className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }} // Start from slightly below and hidden
      animate={{ opacity: 1, y: 0 }} // Animate to the final position
      exit={{ opacity: 0, y: 20 }} // On exit, fade out
      transition={{
        duration: 0.5, // Animation duration
        delay: id * 0.1, // Delay each card by a small amount based on its index
      }}
    >
      <span className="flex justify-between items-center gap-4">
        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white truncate">
          {title}
        </h1>
        <span className="flex items-center text-[#ccc] gap-1">
          <BiTimeFive />
          {time}
        </span>
      </span>
      <h6 className="text-[#ccc]">{location}</h6>
      <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
        {desc}
      </p>
      <div className="company flex items-center justify-start gap-2">
        <img className="w-[10%]" src={image} alt={company} />
        <span className="text-[14px] py-[1rem] block group-hover:text-white">
          {company}
        </span>
      </div>
      <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-blueColor hover:text-textColor text-white group-hover/item:text-textColor group-hover:bg-white">
        Apply Now
      </button>
    </motion.div>
  );
};

export default JobCard;
