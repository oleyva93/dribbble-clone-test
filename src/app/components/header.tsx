import { Link } from "react-router-dom";
import { useSiteData } from "shared/hooks/useHeaderData";

const Header: React.FC = () => {
  const { data } = useSiteData();

  return (
    <header className="flex gap-8 h-9">
      <img
        src="src/assets/octo.png"
        alt="Dribbble"
        className="w-[100px] h-[35px]"
      />
      <nav className="flex text-xs items-center gap-4">
        {data?.nav.map((item) => (
          <div key={item.title}>
            <Link to={item.link} className="text-white">
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
