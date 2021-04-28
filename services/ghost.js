import GhostContentAPI from "@tryghost/content-api";

const ghostAPI = new GhostContentAPI({
  url: 'https://paula-diniz.ghost.io',
  key: '34a9bb4843672c5472e7cd911c',
  version: "v3"
});

export async function getPosts() {
  return await ghostAPI.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await ghostAPI.posts
      .read({
          slug: postSlug
      })
      .catch(err => {
          console.error(err);
      })
}