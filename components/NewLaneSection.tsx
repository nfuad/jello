import * as React from 'react'

// custom imports
import { NewLaneSection } from './Board/styles/Base'
import { AddLaneLink } from './Board/styles/Elements'

export default ({ onClick }) => (
  <NewLaneSection>
    <AddLaneLink onClick={onClick}>Add another lane</AddLaneLink>
  </NewLaneSection>
)
