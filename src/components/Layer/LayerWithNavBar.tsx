import { ABOUT_ME, CONTACT_ME, CONSULTANCE } from "../constants/NavIndex";
import NavBar from "../molecule/NavBar";

interface Props {
  childComp: React.ReactNode;
}

export default function LayerWithNavBar({ childComp }: Props) {
  const navProps = [ABOUT_ME, CONTACT_ME, CONSULTANCE];
  return (
    <div className="w-full h-full bg-black">
      <NavBar navProps={navProps} />
      <div className="p-6 -mt-3 w-full bg-black h-full">{childComp}</div>
    </div>
  );
}
