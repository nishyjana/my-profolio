import { ABOUT_ME, CONTACT_ME, CONSULTANCE, WELCOME } from "../constants/NavIndex";
import NavBar from "../molecule/NavBar";

interface Props {
  childComp: React.ReactNode;
}

export default function LayerWithNavBar({ childComp }: Props) {
  const navProps = [WELCOME, ABOUT_ME, CONTACT_ME, CONSULTANCE];
  return (
    <div className={`hidden  lg:block w-full h-full bg-black`}>
      <NavBar navProps={navProps} />
      <div className="p-6 -mt-3 w-full bg-black h-full">{childComp}</div>
    </div>
  );
}
