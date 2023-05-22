const gql = require("graphql-tag");

const typDefs = gql`
  "A trackis a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The teack's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
`;

module.exports = typDefs;

// starting point
