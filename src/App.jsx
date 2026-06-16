import React, { useState } from 'react'
import Home from './Pages/Home';
const App = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div>


        {show == false && <Home />}

      </div>

    </>
  )
}
export default App