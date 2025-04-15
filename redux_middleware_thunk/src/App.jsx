import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import CoffeeList from './CoffeeList'

const App = () => {
  return (
    <Provider store={store}>
      <CoffeeList/>
    </Provider>
  )
}

export default App
