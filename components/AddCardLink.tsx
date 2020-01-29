import * as React from 'react'

// custom imports
import { AddCardLink } from './Board/styles/Base'

export default ({ onClick }) => (
  <AddCardLink onClick={onClick}>Click to add card</AddCardLink>
)
