import axios from "axios";

const basePath = "https://api.github.com";

const agent = axios.create({
  baseURL: basePath
});

const userPath = username => {
  return `/users/${username}/repos`;
};

const reposPath = (username, repo) => {
  return `/repos/${username}/${repo}/readme`;
};

export const getGithubUserRepos = username => {
  return agent.get(userPath(username));
};

export const getRepoReadme = (username, repo) => {
  return agent.get(reposPath(username, repo));
};
