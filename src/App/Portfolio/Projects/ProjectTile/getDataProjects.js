import axios from "axios";

const URL = "https://api.github.com/users";
const user = "DorotaZielinska";

export const getGitHubData = async () => {
  const response = await axios.get(`${URL}/${user}/repos?sort=created`);
  return await response.data;
};
