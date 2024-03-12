import DribbbleIcon from "shared/components/icons/dribbble-icon";
import { useHeaderData } from "shared/hooks/useHeaderData";

const Header: React.FC = () => {
  const { data } = useHeaderData();

  return (
    <header className="w-full p-nav grid items-center grid-rows-nav grid-cols-nav gap-10">
      <DribbbleIcon className="w-full" />
      <nav className="flex items-center ">
        <ul className="flex items-center space-x-5">
          {data?.nav.map((item) => (
            <li key={item.title}>
              <a href={item.title} className=" hover:text-slate-900">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
