import React from "react";
import FacebookIcon from "../atom/FacebookIcon";
import LinkedinIcon from "../atom/LIinktinIcon";
import TwitterIcon from "../atom/TwitterIcon";
import { MyImageURl } from "../constants/Resources";

export default function HomePage() {
  return (
    <div className="w-full h-full p-20 bg-white bg-opacity-10 rounded-2xl">
      <div className="border-2 border-white border-opacity-10 h-full w-full rounded-2xl m-auto flex">
        <div
          className="flex-1 w-full border-r-2 border-orange p-20  text-white rounded-full"
        >
          <img
            src={MyImageURl}
            alt="img"
            className="w-full h-full object-cover rounded-full opacity-30"
          />
        </div>
        <div className="flex-1 w-full  h-full p-6 flex-col my-3 justify-between text-white font-serif">
          <div className="my-8"> FULL NAME : JANARTHANARAJAH NISHANTHAN</div>
          <div className="my-8">
            {" "}
            QUALIFICATION : BENG(HONS) IN SOFTWARE ENGINEERING
          </div>
          <div className="my-8"> JOB TITLE : SOFTWARE ENGINEER</div>
          <div className="my-8"> COMPANY : ROOTCODE LABS</div>
          <div className="w-full my-20 p-10 flex mx-3 justify-evenly">
            <FacebookIcon />
            <LinkedinIcon />
            <TwitterIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}
