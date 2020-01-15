import gql from 'graphql-tag'

export const typeDefs = gql`
  type Board {
    id: ID!
    title: String!
    description: String!
    created_at: String!
    owner: String!
    lanes: [Lane]
    backgroundColor: String!
  }

  type Lane {
    id: ID!
    title: String
    currentPage: Int
    cards: [Card]
  }

  type Card {
    id: ID!
    title: String
    description: String
    laneId: ID!
    label: String
  }

  input LaneInput {
    id: ID!
    title: String
    currentPage: Int
    cards: [CardInput]
  }

  input CardInput {
    id: ID!
    title: String
    description: String
    laneId: String!
    label: String
  }

  input CreateBoardInput {
    title: String
    description: String
    owner: String
    backgroundColor: String
  }

  input UpdateBoardInput {
    id: ID
    lanes: [LaneInput]
    owner: String
  }

  input DeleteBoardInput {
    id: ID
    owner: String
  }

  type Query {
    boards(owner: String): [Board]
    user(id: ID): User!
  }

  type Mutation {
    createBoard(data: CreateBoardInput!): Board!
    updateBoard(data: UpdateBoardInput!): Board!
    deleteBoard(data: DeleteBoardInput!): Board!
  }
`
