import "./styles/App.css";
import { Repository } from "./components/Repository";
import { useGithubRepos } from "./hooks/useGithubRepos";
import { Heading } from "./components/Heading";

function App() {
  const repos = useGithubRepos();
  console.log(repos);
  return (
    <div className="App">
      <Heading />
      {repos.map((repo, index) => (
        <div key={`repo-${index}`}>
          <Repository index={index} repo={repo} />
          {repo.name === "git-portfolio" ? null : (
            <div className={`parallax ${repo.name}`}></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
