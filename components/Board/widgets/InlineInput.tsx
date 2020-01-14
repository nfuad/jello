import * as React from 'react'
import autosize from 'autosize'

// custom imports
import { InlineInput } from '../styles/Base'

interface Props {
  onSave?: any
  onCancel?: any
  border?: boolean
  placeholder?: string
  value?: string
  autoFocus?: boolean
  resize?: string
}

export default class InlineInputController extends React.Component<Props, any> {
  refInput

  onFocus = e => e.target.select()

  // This is the way to select all text if mouse clicked
  onMouseDown = e => {
    if (document.activeElement != e.target) {
      e.preventDefault()
      this.refInput.focus()
    }
  }

  onBlur = () => {
    this.updateValue()
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.refInput.blur()
      e.preventDefault()
    }
    if (e.keyCode === 27) {
      this.setValue(this.props.value)
      this.refInput.blur()
      e.preventDefault()
    }
    if (e.keyCode === 9) {
      if (this.getValue().length === 0) {
        this.props.onCancel()
      }
      this.refInput.blur()
      e.preventDefault()
    }
  }

  getValue = () => this.refInput.value
  setValue = value => (this.refInput.value = value)

  updateValue = () => {
    if (this.getValue() != this.props.value) {
      this.props.onSave(this.getValue())
    }
  }

  setRef = ref => {
    this.refInput = ref
    if (this.props.resize !== 'none') {
      autosize(this.refInput)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value)
  }

  render() {
    const { autoFocus, border, value, placeholder } = this.props

    return (
      <InlineInput
        ref={this.setRef}
        border={border}
        onMouseDown={this.onMouseDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
        placeholder={value.length === 0 ? undefined : placeholder}
        defaultValue={value}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        dataGramm="false"
        rows={1}
        autoFocus={autoFocus}
      />
    )
  }
}

// @ts-ignore
// InlineInputController.propTypes = {
//   onSave: PropTypes.func,
//   border: PropTypes.bool,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   autoFocus: PropTypes.bool,
//   resize: PropTypes.oneOf(['none', 'vertical', 'horizontal']),
// }

// @ts-ignore
InlineInputController.defaultProps = {
  onSave: () => {},
  placeholder: '',
  value: '',
  border: false,
  autoFocus: false,
  resize: 'none',
}
