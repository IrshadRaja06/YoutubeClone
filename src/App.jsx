import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import Header from './Header'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="row">
      <div className="col-1">
      <Menu />
      </div>
      <div className="col-11">
        <Content />
      </div>
    </div>
      
    </>
  )
}

export default App
