import { useState } from 'react'

import './App.css'
import Loginpage from './componants/Loginpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loginpage/>
    </>
  )
}

export default App
