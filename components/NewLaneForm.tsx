import * as React from 'react'
import ClickOutside from 'react-click-outside'

// custom imports
import { LaneTitle, NewLaneButtons, Section } from './Board/styles/Base'
import { AddButton, CancelButton } from './Board/styles/Elements'
import NewLaneTitleEditor from './Board/widgets/NewLaneTitleEditor'

interface Props {
  onCancel: any
  onAdd: any
}

export default class NewLane extends React.Component<Props, any> {
  refInput

  handleSubmit = () => {
    this.props.onAdd({ title: this.getValue() })
  }

  getValue = () => this.refInput.getValue()

  onClickOutside = (a, b, c) => {
    if (this.getValue().length > 0) {
      this.handleSubmit()
    } else {
      this.props.onCancel()
    }
  }

  render() {
    const { onCancel } = this.props
    return (
      <ClickOutside onClickOutside={this.onClickOutside}>
        <Section>
          <LaneTitle>
            <NewLaneTitleEditor
              ref={ref => (this.refInput = ref)}
              placeholder="placeholder.title"
              onCancel={this.props.onCancel}
              onSave={this.handleSubmit}
              resize="vertical"
              border
              autoFocus
              autoResize={true}
              value={''}
            />
          </LaneTitle>
          <NewLaneButtons>
            <AddButton onClick={this.handleSubmit}>Add lane</AddButton>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>
          </NewLaneButtons>
        </Section>
      </ClickOutside>
    )
  }
}
