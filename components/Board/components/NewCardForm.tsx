import * as React from 'react'

// custom imports
import {
  CardForm,
  CardHeader,
  CardRightContent,
  CardTitle,
  CardWrapper,
  Detail,
} from '../styles/Base'
import { AddButton, CancelButton } from '../styles/Elements'
import EditableLabel from '../widgets/EditableLabel'

interface Props {
  onCancel: any
  onAdd: any
}

export default class NewCardForm extends React.Component<Props, any> {
  updateField = (field, value) => {
    this.setState({ [field]: value })
  }

  handleAdd = () => {
    this.props.onAdd(this.state)
  }

  render() {
    const { onCancel } = this.props
    return (
      <CardForm>
        <CardWrapper>
          <CardHeader>
            <CardTitle>
              <EditableLabel
                placeholder="title"
                onChange={val => this.updateField('title', val)}
                autoFocus
              />
            </CardTitle>
            <CardRightContent>
              <EditableLabel
                placeholder="label"
                onChange={val => this.updateField('label', val)}
              />
            </CardRightContent>
          </CardHeader>
          <Detail>
            <EditableLabel
              placeholder="description"
              onChange={val => this.updateField('description', val)}
            />
          </Detail>
        </CardWrapper>
        <AddButton onClick={this.handleAdd}>Add Card</AddButton>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </CardForm>
    )
  }
}
