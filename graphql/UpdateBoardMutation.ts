import gql from 'graphql-tag'

export default gql`
  mutation UpdateBoard($id: ID, $lanes: [LaneInput]) {
    updateBoard(data: { id: $id, lanes: $lanes }) {
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
