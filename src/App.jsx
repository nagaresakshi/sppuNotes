import { useState } from 'react'

import './App.css'
import Loginpage from './componants/Loginpage'
import HomePage from './componants/HomePage'
import Signup from './componants/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
