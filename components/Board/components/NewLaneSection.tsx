import * as React from 'react'

// custom imports
import { NewLaneSection } from '../styles/Base'
import { AddLaneLink } from '../styles/Elements'

export default ({ onClick }) => (
  <NewLaneSection>
    <AddLaneLink onClick={onClick}>Add another lane</AddLaneLink>
  </NewLaneSection>
)
