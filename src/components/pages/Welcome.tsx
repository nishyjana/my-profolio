import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addClickCount } from "../../redux/rootActions";
import { RootState } from "../../redux/rootReducer";
import { HOME_PAGE_PATH } from "../constants/PathIndex";
import { GITHUB_LINK } from "../constants/Resources";
import { isMobile } from "react-device-detect";

export default function Welcome() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const clickedCounts = useSelector(
    (state: RootState) => state.general.clickCount
  );

  return (
    <div className="h-full lg:h-screen w-full bg-black lg:border-2 lg:border-orange lg:border-opacity-40 rounded-3xl lg:p-10">
      <div className="p-3 lg:p-10 lg:bg-white lg:bg-opacity-5 lg:h-full lg:w-full rounded-3xl flex-col">
        <div className="justify-between flex">
          <img
            src={require("../../../src/images/cele.jpeg")}
            alt="imgs"
            className="w-10 rounded-full opacity-50 animate-ping"
          />
          <img
            src={require("../../../src/images/cele.jpeg")}
            alt="imgs"
            className="w-10 rounded-full opacity-50 animate-ping"
          />
        </div>
        {isMobile ? (
          <h1 className="text-center text-xl p-10 animate-pulse text-red-600">
            Not best fit for mobile view
          </h1>
        ) : null}
        <h1 className="text-orange text-center text-xl lg:text-3xl p-10 animate-pulse">
          WARM WELCOME ALL!
        </h1>
        <h2 className="text-orange text-center text-xl lg:text-lg animate-bounce">
          Hi everyone! Im Nishy.
        </h2>

        <p className="text-orange text-center text-sm  p-2 lg:p-10 animate-pulse">
          Thank you for stopping by! This is my personal website.
        </p>
        <div className="w-full flex flex-col">
          <h2 className="text-orange m-auto text-center text-sm lg:text-md">
            Give likes to my web(click counter lol 🤪)
          </h2>
          <h1
            className="m-auto my-2 cursor-pointer flex-col text-orange"
            onClick={() => {
              setDisplay(true);
              dispatch(addClickCount());
            }}
          >
            👍
          </h1>

          {display || clickedCounts > 0 ? (
            <div className=" text-orange m-auto mb-3">
              {clickedCounts} Likes
            </div>
          ) : null}
        </div>

        <div className="flex w-full">
          <button
            className="rounded-3xl border-2 border-black bg-orange text-black px-5 py-3 mx-auto"
            onClick={() => navigate(HOME_PAGE_PATH)}
          >
            Get Started
          </button>
        </div>
        <div className="lg:flex w-full mt-20">
          <p className="text-orange text-center lg:text-lg  m-auto lg:p-10 animate-pulse lg:flex">
            You can find the source code base of this webiste
            <div
              className="text-white text-xl mx-2  cursor-pointer"
              onClick={() => (window.location.href = `${GITHUB_LINK}`)}
            >
              here!!!
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
