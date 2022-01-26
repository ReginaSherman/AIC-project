/*eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './Styles/App.css'
import Header from './HeaderComponents/Header'
import AllArt from './AllArt'
import Artwork from './Artwork'
import Categories from './CategoryComponents/Categories'
import Paintings from './CategoryComponents/Paintings'
import Watercolor from './CategoryComponents/Watercolor'
import Photographs from './CategoryComponents/Photographs'
import Drawing from './CategoryComponents/Drawing'
import PageNumbers from './PageNumbers'

const App = () => {

  return (
    <div className='container'>
      <Header />
      
      <main>
        <Routes>
          <Route exact path='/' element={ <AllArt /> } />
          <Route path={ '/:page' } element={ <PageNumbers /> } />
          <Route path='/categories' element={ <Categories /> } />
          <Route path='/artwork/:id' element={ <Artwork /> } />
          <Route path='/painting' element={ <Paintings /> }/>
          <Route path='/watercolor' element={ <Watercolor /> } />
          <Route path='/drawing' element={ <Drawing /> } />
          <Route path='/photograph' element={ <Photographs /> }/>
        </Routes>
      </main>
    </div>
  )
}

export default App
