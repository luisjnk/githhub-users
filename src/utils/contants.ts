export const GITHUB = {
  REPOSITORY: {
    URL_PREFIX: "https://api.github.com/search/repositories?q=created:>",
    URL_SUFIX: "&page=1&per_page=5&sort=stargazers_count&order=desc",
    QUERY: "?q=page=1&per_page=1&sort=stargazers_count&order=desc"
  },
  USERS: {
    URL_PREFIX: "https://api.github.com/search/users?q=created:>",
    URL_SUFIX: "&page=1&per_page=5&sort=followers&order=desc",
  }
}
export const HOT_REPOSITORY_BUTTON = {
  name: "Hot Repositories",
  id: "hot_repo"
}

export const HOT_USERS_BUTTON = {
  name: "Trending Users",
  id: "prolific_users"
}

export const HEADER_ATTRIBUTES = {
  REPOSITORIES_TABLE: ["Id", "Name", "Description", "Stars"],
  USERS_TABLE: ["Id", "Login", "Avatar", "Followers"]
}
