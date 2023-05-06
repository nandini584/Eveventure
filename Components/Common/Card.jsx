import React from "react";
import image1 from "../Assets/picture 13.svg";
import { FaRegHeart } from "react-icons/fa";

function Card({ title, time, Location, Price, Type, Mode }) {
  return (
    <>
      <div className="flex mx-11 my-5">
        <div className=" relative bg-white shadow-2xl hover:shadow-none cursor-pointer w-92 h-100 rounded-sm flex flex-col pb-4">
          <div>
          <img className=" relative px-4 py-2" src={image1} alt="My Image" />
          <FaRegHeart className="absolute left-[80%] top-2 text-white h-10 w-6 hover:text-red-600"></FaRegHeart>
          </div>
          <span className="text-2xl font-bold font-serif mx-4">{title}</span>
          <span className="text-sm text-orange-400 mx-4 my-2 font-semibold">
            {time}
          </span>
          <span className="text-sm text-black-400 mx-4 my-2">{Location}</span>
          <span className="text-sm text-black-400 mx-4 my-2">{Price}</span>
          <div className="flex flex-row justify-center space-x-10">
            <span className="w-28 h-10 bg-slate-200 rounded-3xl flex items-center justify-center">
              {Type}
            </span>
            <span className="w-28 h-10 bg-slate-200 rounded-3xl flex items-center justify-center">
              {Mode}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
