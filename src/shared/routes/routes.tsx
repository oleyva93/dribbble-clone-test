import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import FallbackPage from "shared/components/fallback-page";
import { retry } from "shared/helpers/utils";

const NoPageFound = lazy(() =>
  retry(() => import("shared/components/no-page-found"))
);
const ErrorElement = lazy(() =>
  retry(() => import("shared/components/error-element"))
);

const DribbbleApp = lazy(() => retry(() => import("app/index")));

export const routesConfig = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<FallbackPage />}>
        <DribbbleApp />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
    children: [{ path: "*", element: <NoPageFound /> }],
  },
]);
