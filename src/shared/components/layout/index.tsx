import { memo } from "react";

import { AppProvider } from "shared/providers/app-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default memo(Layout);
