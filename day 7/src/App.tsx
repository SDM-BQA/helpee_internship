// import Counter from "./components/Counter";


// // store
// interface CounterState {
//   value:number
// }

// interface Userstate{
//   isSignedIn: boolean
// }

// // actions -> tell redux what it do to the state

// const increment = {type: "INCREMENT", payload: 10}
// const decrement = {type: "DECREMENT"}


// // reducres -> it take an action and depending on the type of the action it made the update


// const App = () => {
//   return (
//     <div>
//       <h2>Redux Complete Tutorial</h2>
//       <Counter />
//     </div>
//   );
// };

// export default App;

import { Provider } from "react-redux"
import Counter from "./components/Counter"
import { store } from "./app/store"

const App = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default App