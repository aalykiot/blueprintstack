import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    template(blueprint: String!): String!
  }
`;

export default typeDefs;
