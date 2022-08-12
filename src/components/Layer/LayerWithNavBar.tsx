import { ABOUT_ME, CONTACT_ME, CONSULTANCE } from "../constants/NavIndex";
import NavBar from "../molecule/NavBar";

interface Props {
  childComp: React.ReactNode;
}

export default function LayerWithNavBar({ childComp }: Props) {
  const navProps = [ABOUT_ME, CONTACT_ME, CONSULTANCE];
  return (
    <div className="w-full h-screen">
      <NavBar navProps={navProps} />
      <div className="p-2 w-full bg-gray-800 h-screen">{childComp}</div>
    </div>
  );
}
