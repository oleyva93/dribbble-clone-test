import { Link } from "react-router-dom";
import { MenuIcon } from "shared/components/icons/menu-icon";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "shared/components/ui/drawer";

import { useSiteData } from "shared/hooks/useHeaderData";
import InfoBanner from "./info-banner";

function DrawerSidebar() {
  const { data } = useSiteData();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="md:hidden">
          <MenuIcon />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm mt-4">
          <DrawerHeader>
            <DrawerTitle className="border-b border-black">
              <nav className="flex text-xs items-center gap-4">
                {data?.nav.map((item) => (
                  <div key={item.title}>
                    <Link to={item.link} className="text-black">
                      {item.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </DrawerTitle>

            <InfoBanner fixed={false} />
          </DrawerHeader>
          <DrawerFooter>
            <header className="flex justify-end gap-x-2 lg:px-10 h-fit">
              <DrawerSidebar />
              <button className="text-back text-xs font-bold px-4 py-2 rounded-md">
                Log in
              </button>
              <button className="text-primary lg:text-primary-foreground text-xs font-bold px-4 py-2 bg-primary-foreground lg:bg-primary">
                Get a quote
              </button>
            </header>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerSidebar;
