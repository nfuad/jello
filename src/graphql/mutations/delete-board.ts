export default `
  mutation DeleteBoard($id: ID!) {
    deleteBoard(data: { id: $id }) {
      id
  }
}
`
