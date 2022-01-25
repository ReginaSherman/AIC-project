import React from 'react'
import { Button } from 'reactstrap'

const PageNumbers = ({ page, setPage }) => {
const decrementPage = () => setPage(page-1)
const incrementPage = () => setPage(page+1)
    return (
        
      <div className='pagination'>
        <Button className='button' outline onClick={ decrementPage }>Previous</Button>
        <h4>{ page }</h4>
        <Button className='button' outline onClick={ incrementPage }>Next</Button>
      </div>
    )
}

export default PageNumbers