import * as React from 'react'
import { Provider } from 'react-redux'
import classNames from 'classnames'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import uuidv1 from 'uuid/v1'

// custom imports
import BoardContainer from './BoardContainer'
import boardReducer from '../reducers/BoardReducer'

const middlewares = process.env.REDUX_LOGGING ? [logger] : []

export default class Board extends React.Component<any, any> {
  store
  id

  constructor(props) {
    super(props)
    this.store = this.getStore()
    this.id = this.props.id || uuidv1()
  }

  getStore = () => {
    //When you create multiple boards, unique stores are created for isolation
    return createStore(boardReducer, applyMiddleware(...middlewares))
  }

  render() {
    const { id, className, components } = this.props
    const allClassNames = classNames('react-trello-board', className || '')
    return (
      <Provider store={this.store}>
        <>
          <components.GlobalStyle />
          <BoardContainer
            id={this.id}
            {...this.props}
            className={allClassNames}
          />
        </>
      </Provider>
    )
  }
}
