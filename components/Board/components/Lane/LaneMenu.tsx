import * as React from 'react'
import { Popover } from 'react-popopo'

// custom imports
import { CustomPopoverContent, CustomPopoverContainer } from '../../styles/Base'
import {
  LaneMenuTitle,
  LaneMenuHeader,
  LaneMenuContent,
  DeleteWrapper,
  LaneMenuItem,
  GenDelButton,
  MenuButton,
} from '../../styles/Elements'

export default ({ onDelete }) => (
  <Popover
    position="bottom"
    PopoverContainer={CustomPopoverContainer}
    PopoverContent={CustomPopoverContent}
    trigger={<MenuButton>⋮</MenuButton>}
  >
    <LaneMenuHeader>
      <LaneMenuTitle>Lane actions</LaneMenuTitle>
      <DeleteWrapper>
        <GenDelButton>&#10006;</GenDelButton>
      </DeleteWrapper>
    </LaneMenuHeader>
    <LaneMenuContent>
      <LaneMenuItem onClick={onDelete}>Delete lane</LaneMenuItem>
    </LaneMenuContent>
  </Popover>
)
