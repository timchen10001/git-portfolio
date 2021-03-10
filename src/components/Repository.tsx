import "../styles/Repository.css";
import React from "react";
import { GithubResponse } from "../types";

interface RepositoryProps {
  index: number;
  repo: GithubResponse;
}

export const Repository: React.FC<RepositoryProps> = ({ index, repo }) => {
  const descriptions = repo.description?.split("✔️ ");
  return (
    <ul className={`repository ${repo.name}-cover`}>
      <h1 className="repository__name" key={`name-${index}`}>
        {repo.name}
      </h1>
      <p className="repository__description" key={`description-${index}`}>
        {descriptions?.map((des, idx) => (
          <>
            {idx !== 0 ? `✔️ ${des}` : des}
            <br />
          </>
        ))}
      </p>
      <a
        className="repository__url"
        href={`${repo.html_url}`}
        key={`url-${index}`}
      >
        <img
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt="github"
        />
      </a>
    </ul>
  );
};
