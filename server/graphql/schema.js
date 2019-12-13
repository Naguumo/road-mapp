export default `
interface Event {
  id: ID!
  label: String!
  start: String!
  end: String!
  color: String
}

type PasswordEvent {
  id: ID!
  label: String!
  start: String!
  end: String!
  color: String
  roadmap: PasswordRoadmap!
}

interface Roadmap {
  id: ID!
  slug: String!
}

type PasswordRoadmap implements Roadmap {
  id: ID!
  slug: String!
  password: String!
  events: [PasswordEvent!]
}

type Query {
  passwordEvent(id: ID!): PasswordEvent
  passwordRoadmap(slug: String!, password: String!): PasswordRoadmap
}

type Mutation {
  createPasswordEvent(slug: String!, password: String!, label: String!, start: String!, end: String!, color: String): PasswordEvent
  updatePasswordEvent(slug: String!, password: String!, id: ID!, label: String, start: String, end: String, color: String): [Int!]!
  deletePasswordEvent(slug: String!, password: String!, id: ID!): Int!
  createPasswordRoadmap(slug: String!, password: String!): PasswordRoadmap
  updatePasswordRoadmap(id: ID!, slug: String, password: String): [Int!]!
  deletePasswordRoadmap(slug: String!, password: String!): Int!
}
`;
