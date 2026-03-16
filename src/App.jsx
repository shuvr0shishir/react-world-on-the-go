
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries.jsx';

// Fetching ----->
const fetchCountries = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());


function App() {

  return (
    <>
      <h1>React World On The Go...</h1>

      <Suspense fallback={<p>All Countries Loading...</p>}>
          <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>



    </>
  )
}

export default App
