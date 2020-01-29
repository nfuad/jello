import * as React from 'react'
import { Provider } from 'react-redux'
import classNames from 'classnames'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import shortid from 'shortid'
import BoardContainer from './BoardContainer'
import boardReducer from '../../../reducers/BoardReducer'

const middlewares = process.env.REDUX_LOGGING ? [logger] : []

interface Props {
  className: any
  components: any
}

export default class Board extends React.Component<Props, any> {
  store
  id

  constructor(props) {
    super(props)
    this.store = this.getStore()
    this.id = props.id || shortid.generate()
  }

  getStore = () => {
    //When you create multiple boards, unique stores are created for isolation
    return createStore(boardReducer, applyMiddleware(...middlewares))
  }

  render() {
    const { className, components } = this.props
    const allClassNames = classNames('react-trello-board', className || '')
    return (
      // @ts-ignore
      <Provider store={this.store}>
        <>
          <components.GlobalStyle />
          <BoardContainer
            // @ts-ignore
            id={this.id}
            {...this.props}
            className={allClassNames}
          />
        </>
      </Provider>
    )
  }
}
