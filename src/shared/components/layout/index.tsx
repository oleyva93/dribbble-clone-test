import { memo } from "react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center w-full h-[100dvh]">
      <Header />
      <div className="w-full py-10 px-10">{children}</div>
    </main>
  );
};

export default memo(Layout);
