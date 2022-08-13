import React from "react";
import FacebookIcon from "../atom/FacebookIcon";
import LinkedinIcon from "../atom/LIinktinIcon";
import PersonalDetail from "../atom/PersonalDetail";
import TwitterIcon from "../atom/TwitterIcon";
import { MyImageURl } from "../constants/Resources";

export default function HomePage() {
  return (
    <div className="w-full h-full p-20 bg-black bg-opacity-5 rounded-2xl">
      <div className="border-2 border-orange border-opacity-20 h-full w-full rounded-2xl m-auto flex">
        <div className="flex-1 w-full border-r-4 shadow-lg border-orange p-20  text-white rounded-full">
          <img
            src={MyImageURl}
            alt="img"
            className="w-full h-full object-cover rounded-full opacity-30"
          />
        </div>
        <div className="flex-1 w-full  h-full p-6 flex-col my-3 justify-between text-white font-serif">
          <PersonalDetail/>
          <div className="w-full my-10 p-10 flex mx-3 justify-evenly">
            <FacebookIcon />
            <LinkedinIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="text-orange my-1 mx-auto text-center mt-10 ">
        © 2022. Nishanthan. All Rights Reserved.
      </div>
    </div>
  );
}
