import "../styles/Repository.css";
import React from "react";
import { GithubResponse } from "../types";

interface RepositoryProps {
  index: number;
  repo: GithubResponse;
}

export const Repository: React.FC<RepositoryProps> = ({ index, repo }) => {
  const descriptions = repo.description?.split("✔️ ");
  const title = descriptions?.[0];
  const isPortfolio = repo.name === "git-portfolio";
  return (
    <ul className={`repository ${repo.name}-cover`}>
      <h1 className="repository__name" key={`name-${index}`}>
        {repo.name}
      </h1>
      <div className="url__group">
        <a
          className="repository__url"
          href={`${repo.html_url}`}
          key={`repo-url-${index}`}
          title={`${repo.html_url}`}
          style={{ color: !isPortfolio ? "black" : "#C8C9CB" }}
        >
          <img
            src={
              !isPortfolio
                ? "https://image.flaticon.com/icons/png/512/25/25231.png"
                : "https://webstockreview.net/images250_/github-icon-png-8.png"
            }
            alt={`${repo.name}-github`}
          />
          Repository
        </a>
        <a
          className="repository__url"
          href={`${repo.homepage}`}
          key={`repository-url-${index}`}
          title={`${repo.homepage}`}
          style={{ color: !isPortfolio ? "black" : "white" }}
        >
          <img
            src={
              !isPortfolio
                ? "https://upload.cc/i1/2021/03/11/kCU3tw.png"
                : "https://res.cloudinary.com/dunc6xvuh/image/upload/v1615493859/material/Link-Building-Icon_lmxqtt.png"
            }
            alt={`${repo.name}-homepage`}
          />
          Live Demo
        </a>
      </div>

      <p className="repository__description" key={`description-${index}`}>
        <span className="repository__title2">{title}</span>
        <span className="repository__item">
          {descriptions?.map((des, idx) =>
            idx === 0 ? null : (
              <>
                {`✔️ ${des}`}
                <br />
              </>
            )
          )}
        </span>
      </p>
    </ul>
  );
};
