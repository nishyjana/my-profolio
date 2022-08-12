import { CONSULTANCE } from "../constants/NavIndex";

interface Props {
  navProps: any;
}

export default function NavBar({ navProps }: Props) {
  return (
    <div className="px-2 py-6 w-full text-white font-serif bg-black flex justify-end">
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
  );
}
