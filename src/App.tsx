import { SWRConfig, SWRConfiguration } from "swr";

import Layout from "shared/components/layout";

import buildProvidersTree from "shared/providers/build-providers-tree";
import AppRoutes from "shared/routes";

const swrProps: { value: SWRConfiguration } = {
  value: {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  },
};

const ProvidersTree = buildProvidersTree([[Layout], [SWRConfig, swrProps]]);

function App() {
  return (
    <ProvidersTree>
      <AppRoutes />
    </ProvidersTree>
  );
}

export default App;
