import { useState } from 'react'
import './App.css'
import Header from './Header'
import { movies } from './Data'
import Movies from './Movies'
function App() {


  return (
    <div>
      <Header />
      <div className='movies_main'>
        {movies?.map((movie, index) => (

          <Movies key={index} movie={movie} />

        ))}

      </div>
    </div>

  )
}

export default App
