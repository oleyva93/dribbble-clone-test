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

            <article className="flex lg:fixed z-30 w-[16rem] h-28 bg-white top-[20%] left-[46.7%] price-section-figure mt-5">
              <div className="bg-[#f6fcd5] p-2 flex items-center">
                <span className="uppercase font-bold text-sm [writing-mode:vertical-rl]">
                  Covered
                </span>
              </div>
              <div className="w-full h-full px-9 flex items-center pt-4">
                <div className="relative">
                  <span className="absolute z-10 -top-14 -left-6 rounded-full w-10 h-10 bg-[#eaff6c] flex items-center justify-center font-bold text-xl text-[#474e21]">
                    $
                  </span>
                  <span className="absolute -top-10 text-[#474e21] font-extrabold text-4xl z-50">
                    500k
                  </span>
                </div>
                <span className="mt-8 text-xl font-light">$10.99 / month</span>
              </div>
            </article>
          </DrawerHeader>
          <DrawerFooter>
            <header className="flex justify-end gap-x-2 lg:px-10 h-fit">
              <DrawerSidebar />
              <button className="text-back text-xs font-bold px-4 py-2 rounded-md">
                Log in
              </button>
              <button className="text-[rgb(71,78,33)] lg:text-[#d2abe4] text-xs font-bold px-4 py-2 bg-[#d2abe4] lg:bg-[rgb(71,78,33)]">
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
