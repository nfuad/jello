export default `mutation CreateBoard($title: String, $description: String) {
  createBoard(data: { title: $title, description: $description }) {
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
