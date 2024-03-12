import useSWR from "swr";

import client from "shared/config/http";
import { LayoutEnum } from "shared/enums/layout.enum";

//fetchers

const getHeaderData = () => client.get("/default/frontendTest");

//hooks

export const useHeaderData = (options = {}) => {
  return useSWR(LayoutEnum.HEADER, () => getHeaderData(), options);
};

getHeaderData();
