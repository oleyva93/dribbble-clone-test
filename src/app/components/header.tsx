import { memo } from "react";
import { Link } from "react-router-dom";

import { useSiteData } from "shared/hooks/useHeaderData";

const Header: React.FC = () => {
  const { data } = useSiteData();

  return (
    <header className="flex gap-8 h-fit">
      <img src="octo.png" alt="Dribbble" className="w-[100px] h-[35px]" />
      <nav className="hidden md:flex text-xs items-center gap-8">
        {data?.nav.map((item) => (
          <Item key={item.title} title={item.title} link={item.link} />
        ))}
      </nav>
    </header>
  );
};

const Item = memo(({ title, link }: { title: string; link: string }) => {
  return (
    <div>
      <Link to={link} className="text-white font-semibold">
        {title}
      </Link>
    </div>
  );
});

export default Header;
