import { Outlet } from "react-router-dom";

import { AppProvider } from "shared/providers/app-provider";

const DribbbleApp = () => {
  return (
    <AppProvider>
      ... // The rest of the app
      <Outlet />
    </AppProvider>
  );
};

export default DribbbleApp;
