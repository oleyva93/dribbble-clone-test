import DribbbleIcon from "shared/components/icons/dribbble-icon";
import { useHeaderData } from "shared/hooks/useHeaderData";

const Header: React.FC = () => {
  const { data } = useHeaderData();

  console.log(data);
  return (
    <header className="w-full p-nav grid items-center grid-rows-nav grid-cols-nav gap-10">
      <DribbbleIcon className="w-full" />
    </header>
  );
};

export default Header;
