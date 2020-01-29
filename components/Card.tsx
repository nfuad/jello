import * as React from 'react'

// custom imports
import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer,
} from './Board/styles/Base'
import Tag from './Tag'
import DeleteButton from './Board/widgets/DeleteButton'

interface Props {
  showDeleteButton: boolean
  onDelete: any
  onClick: any
  style: object
  tagStyle: object
  className: string
  id: string
  title: string
  label: string
  description: string
  tags: any
  cardDraggable: boolean
}

export default class Card extends React.Component<Props, any> {
  onDelete = e => {
    this.props.onDelete()
    e.stopPropagation()
  }

  render() {
    const {
      showDeleteButton,
      style,
      tagStyle,
      onClick,
      className,
      id,
      title,
      label,
      description,
      tags,
      cardDraggable,
    } = this.props

    return (
      <MovableCardWrapper
        data-id={id}
        onClick={onClick}
        style={style}
        className={className}
      >
        <CardHeader>
          <CardTitle draggable={cardDraggable}>{title}</CardTitle>
          <CardRightContent>{label}</CardRightContent>
          {showDeleteButton && <DeleteButton onClick={this.onDelete} />}
        </CardHeader>
        <Detail>{description}</Detail>
        {tags && tags.length > 0 && (
          <Footer>
            {tags.map(tag => (
              <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
            ))}
          </Footer>
        )}
      </MovableCardWrapper>
    )
  }
}

// @ts-ignore
Card.defaultProps = {
  showDeleteButton: true,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  tagStyle: {},
  title: 'no title',
  description: '',
  label: '',
  tags: [],
  className: '',
}
