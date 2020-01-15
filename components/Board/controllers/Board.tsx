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

interface Props {
  id: string
  className: string
  components: any
}

export default (props: Props) => {
  const getStore = () => {
    //When you create multiple boards, unique stores are created for isolation
    return createStore(boardReducer, applyMiddleware(...middlewares))
  }

  const store = getStore()
  const id = props.id || uuidv1()
  const { className, components } = props
  const allClassNames = classNames('react-trello-board', className || '')

  return (
    <Provider store={store}>
      <>
        <components.GlobalStyle />
        <BoardContainer id={id} {...props} className={allClassNames} />
      </>
    </Provider>
  )
}
