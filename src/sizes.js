import axios from "axios";

async function getSizes() {
  let token = process.env.GLB_TOKEN;

  if (!token) {
    throw new Error("GLB_TOKEN is not defined");
  }

  let username = process.env.GLB_USERNAME;

  if (!username) {
    throw new Error("GLB_USERNAME is not defined");
  }

  let ignore = (process.env.GLB_IGNORE || "").split(",");

  await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: {
      query: `
        query {
          user(login: "${username}") {
            repositories(isFork: false, first: 100, orderBy: { direction: DESC, field: PUSHED_AT },
                         ownerAffiliations: OWNER, privacy: PUBLIC) {
              nodes {
                languages(first: 10, orderBy: { direction: DESC, field: SIZE }) {
                  edges {
                    size
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
  }).then((response) => {
    let sizes = { totalSize: 0 };

    for (let node of response.data.data.user.repositories.nodes) {
      for (let edge of node.languages.edges) {
        let name = edge.node.name;

        if (ignore.includes(name)) {
          continue;
        }

        let size = edge.size;
        sizes.totalSize += size;

        if (!sizes[name]) {
          sizes[name] = size;
        } else {
          sizes[name] += size;
        }
      }
    }

    return sizes;
  });
}

export { getSizes };
