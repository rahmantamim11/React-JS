import { PureComponent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import DotChart from './components/DotChart/DotChart'
import Phonebar from './components/PhoneBar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar></Navbar>
    <h1 className='text-8xl text-purple-600 text-center p-4 bg-orange-300 '>Hello From Tailwind</h1>
    <PriceList></PriceList>
    <Dashboard></Dashboard>
    <DotChart></DotChart>
    <Phonebar></Phonebar>
    

    </>
    
  )
}

export default App
