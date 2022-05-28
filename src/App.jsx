import { useSelector,useDispatch } from 'react-redux'
import { incrementCounter } from './features/counter/counter-slice'

function App() {
  const counter = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(incrementCounter())
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React + RTK!</p>
        <p>
          <button type="button" onClick={handleClick}>
            counter is: {counter}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
