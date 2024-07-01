import "../../web-library/src/lib/brand-a-tokens.css"
import { defineCustomElements, WebMfe } from 'react-library';

defineCustomElements();

function App() {

  return (
    <>
      <header>
        <h1>Energie netwerks zijn wij</h1>
      </header>
      <WebMfe></WebMfe>
    </>
  )
}

export default App
