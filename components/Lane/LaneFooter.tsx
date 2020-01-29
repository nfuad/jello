import * as React from 'react'

// custom imports
import { LaneFooter } from '../Board/styles/Base'
import { CollapseBtn, ExpandBtn } from '../Board/styles/Elements'

export default ({ onClick, collapsed }) => (
  <LaneFooter onClick={onClick}>
    {collapsed ? <ExpandBtn /> : <CollapseBtn />}
  </LaneFooter>
)
