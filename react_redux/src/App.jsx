import { Provider } from "react-redux"
import store from "./store"
import { Counter } from "./Counter"

function App() {

  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default App
