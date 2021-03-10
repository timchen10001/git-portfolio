import { GithubResponse } from "../types";

export const selectRepository = (data: GithubResponse[]) => {
  const reposToShow = {
    "mask-map": true,
    "react-layout-demo": true,
    "react-layout-demo2": true,
    "git-portfolio": true,
    WebClient: true,
    WebServer: true,
  } as any;
  return data.filter((d) => reposToShow[d.name]) as GithubResponse[];
};
