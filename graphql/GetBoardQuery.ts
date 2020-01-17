import gql from 'graphql-tag'

export default gql`
  query getBoard($id: ID!) {
    board(id: $id) {
      id
      title
      description
      created_at
      owner
      lanes {
        id
        title
        currentPage
        cards {
          id
          title
          description
          laneId
          label
        }
      }
      backgroundColor
    }
  }
`
