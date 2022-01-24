
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './Styles/App.css';
import Header from './HeaderComponents/Header'
import AllArt from './AllArt'
import Artwork from './Artwork'
import Categories from './CategoryComponents/Categories';
import Artists from './ArtistsComponents/Artists'
import CategoryResults from './CategoryComponents/CategoryResults'

const App = () => {

  return (
    <div className='container'>
      <Header />
      
      <main>
        <Routes>
          <Route exact path='/' element={<AllArt />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/artwork/:id' element={<Artwork />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/CategoryResults' element={ <CategoryResults /> }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
