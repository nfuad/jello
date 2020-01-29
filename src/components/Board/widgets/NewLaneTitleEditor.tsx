import * as React from 'react'
import autosize from 'autosize'

// custom imports
import { InlineInput } from '../styles/Base'

interface Props {
  ref: any
  onSave: () => void
  onCancel: () => void
  border: boolean
  placeholder: string
  value: string
  autoFocus: boolean
  autoResize: boolean
  resize: string
}

export default class NewLaneTitleEditor extends React.Component<Props, any> {
  refInput

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.refInput.blur()
      this.props.onSave()
      e.preventDefault()
    }

    if (e.keyCode === 27) {
      this.cancel()
      e.preventDefault()
    }

    if (e.keyCode === 9) {
      if (this.getValue().length === 0) {
        this.cancel()
      } else {
        this.props.onSave()
      }
      e.preventDefault()
    }
  }

  cancel = () => {
    this.setValue('')
    this.props.onCancel()
    this.refInput.blur()
  }

  getValue = () => this.refInput.value
  setValue = value => (this.refInput.value = value)

  saveValue = () => {
    if (this.getValue() !== this.props.value) {
      // @ts-ignore
      this.props.onSave(this.getValue())
    }
  }

  focus = () => this.refInput.focus()

  setRef = ref => {
    this.refInput = ref
    if (this.props.resize !== 'none') {
      autosize(this.refInput)
    }
  }

  render() {
    const {
      autoFocus,
      resize,
      border,
      autoResize,
      value,
      placeholder,
    } = this.props

    return (
      <InlineInput
        style={{ resize: resize }}
        ref={this.setRef}
        border={border}
        onKeyDown={this.onKeyDown}
        placeholder={value.length === 0 ? undefined : placeholder}
        defaultValue={value}
        rows={3}
        autoResize={autoResize}
        autoFocus={autoFocus}
      />
    )
  }
}

// @ts-ignore
NewLaneTitleEditor.defaultProps = {
  inputRef: () => {},
  onSave: () => {},
  onCancel: () => {},
  placeholder: '',
  value: '',
  border: false,
  autoFocus: false,
  autoResize: false,
  resize: 'none',
}
