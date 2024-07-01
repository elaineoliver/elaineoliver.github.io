import './App.css'
import { MyComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {

  return (
    <>
      <h1>hi!</h1>
      <MyComponent first="Your" last="Name" />
    </>
  )
}

export default App
