const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type FAQ {
    title: String!
    body: String!
}
type homepageElement {
  heading: String!
  subheading: String
  heroImageUrl: String!
}
type RootQuery {
    faqs: [FAQ!]
    homepageElement: homepageElement!
}
schema{
    query: RootQuery
}
`);
