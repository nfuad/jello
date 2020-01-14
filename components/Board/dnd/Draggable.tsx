import * as React from 'react'
import { constants } from 'smooth-dnd'

const { wrapperClass } = constants

interface Props {
  render?: any
  className?: any
}

export default class Draggable extends React.Component<Props, any> {
  render() {
    if (this.props.render) {
      return React.cloneElement(this.props.render(), {
        className: wrapperClass,
      })
    }

    const className = `${
      this.props.className ? this.props.className + ' ' : ''
    }`

    return (
      <div {...this.props} className={`${className}${wrapperClass}`}>
        {this.props.children}
      </div>
    )
  }
}
