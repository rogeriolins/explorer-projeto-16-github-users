export class GithubUser {
  static search(userName) {
    const endpointGitHub = `https://api.github.com/users/${userName}`
    return fetch(endpointGitHub)
      .then((data) => data.json())
      .then((data) => ({
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers,
      }))
    // Tambem pode ser desestruturado:
    //    ({login, name, public_repos, followers}) =>
    //            ({login, name, public_repos, followers})
  }
}
