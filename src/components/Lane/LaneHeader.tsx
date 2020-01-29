import * as React from 'react'

// custom imports
import InlineInput from '../Board/widgets/InlineInput'
import { Title, LaneHeader, RightContent } from '../Board/styles/Base'
import LaneMenu from './LaneMenu'

interface Props {
  updateTitle: () => any
  editLaneTitle: boolean
  canAddLanes: boolean
  laneDraggable: boolean
  label: string
  title: string
  titleStyle: object
  labelStyle: object
  onDelete: () => any
  onDoubleClick: () => any
}

const LaneHeaderComponent = ({
  updateTitle,
  canAddLanes,
  onDelete,
  onDoubleClick,
  editLaneTitle,
  label,
  title,
  titleStyle,
  labelStyle,
  laneDraggable,
}: Props) => {
  return (
    <LaneHeader onDoubleClick={onDoubleClick} editLaneTitle={editLaneTitle}>
      <Title draggable={laneDraggable} style={titleStyle}>
        {editLaneTitle ? (
          <InlineInput
            value={title}
            border
            placeholder="title"
            resize="vertical"
            onSave={updateTitle}
          />
        ) : (
          title
        )}
      </Title>
      {label && (
        <RightContent>
          <span style={labelStyle}>{label}</span>
        </RightContent>
      )}
      {canAddLanes && <LaneMenu onDelete={onDelete} />}
    </LaneHeader>
  )
}

// LaneHeaderComponent.= {
//   updateTitle: () => any),
//   editLaneTitle: bool,
//   canAddLanes: bool,
//   laneDraggable: bool,
//   label: string,
//   title: string,
//   onDelete: () => any),
//   onDoubleClick: () => any),
//   t: () => any).isRequired,
// }

LaneHeaderComponent.defaultProps = {
  updateTitle: () => {},
  editLaneTitle: false,
  canAddLanes: false,
}

export default LaneHeaderComponent
