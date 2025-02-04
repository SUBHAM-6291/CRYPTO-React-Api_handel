import React from 'react'
import Navbar from './Components/Navbar'
import Headers from './Components/Headers.jsx'
import Crypto from './Components/Crypto.jsx'


const App = () => {
  return (
    <div className='w-full h-screen bg-[#1a065d]'>
<Navbar />
<Headers/>

<Crypto/>

    </div>
  )
}

export default App