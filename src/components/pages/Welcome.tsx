import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ABOUT_ME_PATH, HOME_PAGE_PATH } from "../constants/PathIndex";
import { GITHUB_LINK } from "../constants/Resources";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-black border-2 border-orange border-opacity-40 rounded-3xl p-10">
      <div className="p-10 bg-white bg-opacity-5 h-full w-full rounded-3xl flex-col">
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
        <h1 className="text-orange text-center text-3xl p-10 animate-pulse">
          WARM WELCOME ALL!
        </h1>
        <h2 className="text-orange text-center text-lg animate-bounce">
          Hi everyone! Im Nishy.
        </h2>
        <p className="text-orange text-center text-sm p-10 animate-pulse">
          Thank you for stopping by! This is my personal website.
        </p>

        <div className="flex w-full">
          <button
            className="rounded-3xl border-2 border-black bg-orange text-black px-5 py-3 mx-auto"
            onClick={() => navigate(HOME_PAGE_PATH)}
          >
            Get Started
          </button>
        </div>
        <div className="flex w-full mt-20">
          <p className="text-orange text-center text-lg  m-auto p-10 animate-pulse flex">
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
