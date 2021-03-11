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
  return (
    <ul className={`repository ${repo.name}-cover`}>
      <h1 className="repository__name" key={`name-${index}`}>
        {repo.name}
      </h1>
      <p className="repository__description" key={`description-${index}`}>
        {title}
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
      <div className="url__group">
        <a
          className="repository__url"
          href={`${repo.html_url}`}
          key={`repo-url-${index}`}
        >
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt={`${repo.name}-github`}
            title={`${repo.html_url}`}
          />
        </a>
        <a
          className="homepage__url"
          href={`${repo.homepage}`}
          key={`homepage-url-${index}`}
        >
          <img
            src="https://upload.cc/i1/2021/03/11/kCU3tw.png"
            alt={`${repo.name}-homepage`}
            title={`${repo.homepage}`}
          />
        </a>
      </div>
    </ul>
  );
};
