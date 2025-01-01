import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useLocation } from 'react-router-dom';
import HeroWithHeader from './components/custom/HerowithHeader'
import CreateTrip from './create-trip';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  return (
    <>
     <h2></h2>
    </>
  )
}

export default App
