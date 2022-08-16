import { useNavigate } from "react-router-dom";
import { ABOUT_ME, CONSULTANCE, CONTACT_ME, WELCOME } from "../constants/NavIndex";
import {
  ABOUT_ME_PATH,
  CONTACT_ME_PATH,
  HOME_PAGE_PATH,
  WELCOME_PATH,
} from "../constants/PathIndex";

interface Props {
  navProps: any;
}

export default function NavBar({ navProps }: Props) {
  const navigate = useNavigate();
  return (
    <div className="lg:px-2 py-8 w-5/6 lg:w-full text-white font-serif bg-black   lg:flex justify-between">
      <div
        className=" ml-10 lg:ml-0 lg:flex justify-start px-3 lg:px-5 cursor-pointer hover:text-orange hover:text-xl"
        onClick={() => navigate(HOME_PAGE_PATH)}
      >
      PROFILE
      </div>
      <div className="lg:flex lg:px-5">
        {navProps?.length
          ? navProps?.map((prop: any, index: any) => {
              return (
                <div
                  className={`flex justify-end hover:text-xl my-10 lg:my-0 lg:px-4 hover:text-orange cursor-pointer ${
                    prop === CONSULTANCE
                      ? "py-2 lg:-mt-2 lg:border-2 lg:border-blue lg:bg-orange  lg:text-blue rounded-3xl hover:text-base hover:text-blue"
                      : null
                  }`}
                  key={index}
                  onClick={() => {
                    if (prop === ABOUT_ME) {
                      navigate(ABOUT_ME_PATH);
                    } else if (prop === CONTACT_ME) {
                      navigate(CONTACT_ME_PATH);
                    } else if (prop === CONSULTANCE) {
                      alert(
                        "Very sorry for the trouble, Still under development. Please contact me through nishyjana6435@gmail.com"
                      );
                    }else if (prop === WELCOME) {
                      navigate(WELCOME_PATH);
                    } 
                  }}
                >
                  {prop}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
