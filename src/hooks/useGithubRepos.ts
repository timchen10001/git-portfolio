import { useEffect, useState } from "react";
import { GithubResponse } from "../types";
import { selectRepository } from "../utils/selectRepository";

export const useGithubRepos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/timchen10001/repos")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return selectRepository(data as GithubResponse[]);
};
