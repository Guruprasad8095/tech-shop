import { useState } from 'react'

import './App.css'
import Routing from './routes/Routing'
// import FeatureProducts from './component/FeatureProducts'
// import Slides from './component/Slides'

import Navbar from './component/Navbar'
import FeatureProducts from './component/FeatureProducts'

function App() {
  return (
<div>

<Navbar />
<Routing />
{/* <FeatureProducts /> */}


</div>
  )
}

export default App
