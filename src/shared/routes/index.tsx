import { RouterProvider } from "react-router-dom";

import { RouterSubscriptionProvider } from "../providers/route-provider";
import { routesConfig } from "./routes";

function AppRoutes() {
  return (
    <RouterSubscriptionProvider value={routesConfig.subscribe}>
      <RouterProvider router={routesConfig} />
    </RouterSubscriptionProvider>
  );
}

export default AppRoutes;
