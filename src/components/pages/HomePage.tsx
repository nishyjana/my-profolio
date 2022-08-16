import React from "react";
import FacebookIcon from "../atom/FacebookIcon";
import LinkedinIcon from "../atom/LIinktinIcon";
import PersonalDetail from "../atom/PersonalDetail";
import TwitterIcon from "../atom/TwitterIcon";
export default function HomePage() {
  return (
    <div className="w-full h-full p-20 bg-black bg-opacity-5 rounded-2xl">
      <div className="border-2 border-orange border-opacity-20 h-full w-full rounded-2xl m-auto flex">
        <div className="hidden lg:block flex-1 w-full border-r-4 shadow-lg border-orange p-20  text-white rounded-full">
          <img
            src={require("../../../src/images/mypicc.png")}
            alt="imgs"
            className="w-full h-full object-cover bg-white bg-opacity-60 rounded-full opacity-40"
          />
        </div>

        <div className="flex-1 w-full  h-full p-6 flex-col my-3 justify-between text-white font-serif">
          <PersonalDetail />
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
      <div className="text-orange my-1 mx-auto text-center mt-10 ">
        Designed and developed by Nishanthan
      </div>
    </div>
  );
}
