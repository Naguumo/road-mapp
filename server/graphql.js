var express = require('express');
var router = express.Router();

const typeDefs = gql`
  type Event {
    id: ID!
    label: String!
    start: String!
    end: String!
    color: String
    roadmap: Roadmap!
  }

  interface Roadmap {
    id: ID!
    slug: String!
    events: [Event!]
  }

  type UserRoadmap implements Roadmap {
    id: ID!
    slug: String!
    owner: String
    events: [Event!]
  }

  type PasswordRoadmap implements Roadmap {
    id: ID!
    slug: String!
    password: String!
    events: [Event!]
  }

  type Query {
    events: [Event]
    roadmaps: [Roadmap]
  }
`;

const resolvers = {
  Query: {
    events: () => events,
    roadmaps: () => roadmaps
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
