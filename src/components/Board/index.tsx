import * as React from 'react'

// custom imports
import Draggable from './dnd/Draggable'
import Container from './dnd/Container'
import BoardContainer from './controllers/BoardContainer'
import Board from './controllers/Board'
import Lane from './controllers/Lane'
import DefaultComponents from './components'
import widgets from './widgets'

export { Draggable, Container, BoardContainer, Board, Lane, widgets }

export { DefaultComponents as components }

export default ({ components, ...otherProps }: any) => (
  <Board components={{ ...DefaultComponents, ...components }} {...otherProps} />
)
