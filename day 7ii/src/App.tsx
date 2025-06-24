import { Provider } from "react-redux"
import ShowTime from "./components/ShowTime"
import { store } from "./app/store"

const App = () => {
  return (
    <Provider store={store}>
      <ShowTime/>
    </Provider>
  )
}

export default App