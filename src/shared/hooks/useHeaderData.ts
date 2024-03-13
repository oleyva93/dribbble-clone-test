import useSWR from "swr";

import client from "shared/config/http";
import { LayoutEnum } from "shared/enums/layout.enum";

// types

export interface HeaderData {
  nav: Nav[];
  home: Home;
}

export interface Home {
  "header-title": string;
  "header-cta": string;
}

export interface Nav {
  title: string;
  link: string;
}

//fetchers

const getHeaderData = (): Promise<HeaderData> =>
  client.get("/default/frontendTest");

//hooks

export const useSiteData = (options = {}) => {
  //   return useSWR(LayoutEnum.HEADER, () => getHeaderData(), options);
  return { data: headerResponse };
};

const headerResponse = {
  nav: [
    {
      title: "Our offerings",
      link: "/",
    },
    {
      title: "Customer stories",
      link: "/",
    },
  ],
  home: {
    "header-title":
      'No run-around, <span class="title-accent">just</span> affordable life insurance',
    "header-cta": "Talk to an agent today",
  },
};
