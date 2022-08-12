import { useNavigate } from "react-router-dom";
import { ABOUT_ME, CONSULTANCE, CONTACT_ME } from "../constants/NavIndex";
import { ABOUT_ME_PATH, CONTACT_ME_PATH } from "../constants/PathIndex";

interface Props {
  navProps: any;
}

export default function NavBar({ navProps }: Props) {
  const navigate = useNavigate();
  return (
    <div className="px-2 py-8 w-full text-white font-serif bg-blue flex justify-end">
      {navProps?.length
        ? navProps?.map((prop: any) => {
            return (
              <div
                className={`flex justify-end hover:text-xl px-4 cursor-wait ${
                  prop === CONSULTANCE
                    ? "py-2 -mt-2 border-2 border-blue bg-orange  text-blue rounded-3xl hover:text-base"
                    : null
                }`}
                onClick={() => {
                  if (prop === ABOUT_ME) {
                    navigate(ABOUT_ME_PATH);
                  } else if (prop === CONTACT_ME) {
                    navigate(CONTACT_ME_PATH);
                  }
                }}
              >
                {prop}
              </div>
            );
          })
        : null}
    </div>
  );
}
