import * as React from 'react'

// custom imports
import { TagSpan } from '../../styles/Base'

interface Props {
  title: string
  color: string
  bgColor: string
  tagStyle: object
}

export default ({ title, color, bgColor, tagStyle, ...otherProps }: Props) => {
  const style = {
    color: color || 'white',
    backgroundColor: bgColor || 'orange',
    ...tagStyle,
  }

  return (
    <TagSpan style={style} {...otherProps}>
      {title}
    </TagSpan>
  )
}
