import { Suspense } from 'react'
import './App.css'
import Bottles from './assets/components/Bottles/Bottles'

const bottlesPromise = fetch('./bottles.json').then(res => res.json());

function App() {
 

  return (
    <>
      <h1>Buy awesome bottle Here</h1>

    <Suspense fallback="Data Are Loading...">
      <Bottles bottlesPromise= {bottlesPromise}> </Bottles>
    </Suspense>
    </>
  )
}

export default App
