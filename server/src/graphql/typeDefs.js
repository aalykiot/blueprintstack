import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    template(blueprint: String!, theme: String): String!
  }
`;

export default typeDefs;
