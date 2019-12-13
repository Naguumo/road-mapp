import { buildSchema } from 'graphql';

const schema = buildSchema(`
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
`);

export default schema;