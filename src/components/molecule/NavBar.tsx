import { CONSULTANCE } from "../constants/NavIndex";

interface Props {
  navProps?: any;
}

export default function NavBar({ navProps }: Props) {
  return (
    <div className="py-4 px-2 w-full bg-black text-white font-serif flex">
      <div className=" p-3 w-full flex justify-end">
        {navProps?.length
          ? navProps?.map((prop: any) => {
              return (
                <div
                  className={`flex justify-end px-4 ${
                    prop === CONSULTANCE
                      ? "py-2 -mt-2 border-2 border-pink-400 bg-pink-400 rounded-3xl"
                      : null
                  }`}
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
