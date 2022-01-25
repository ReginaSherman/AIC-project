import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { Routes, Route, useParams } from 'react-router-dom'

const PageNumbers = ({ page, setPage }) => {
const decrementPage = () => setPage(page-1)
const incrementPage = () => setPage(page+1)
    return (
        
      <div>
        <Button className='button' outline onClick={ decrementPage }>Previous</Button>
        { page }
        <Button className='button' outline onClick={ incrementPage }>Next</Button>
      </div>

        //Make previous button which uses updatePage function and give it a value of 'previous' 
        //Use a variable and put the page number between the two buttons
        //Make next button that uses updatePage function and give it a value of 'next'
        //in useEffect, watch page value so that when page changes it runs again
      
    )
}

export default PageNumbers