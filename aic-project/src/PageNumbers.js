import React from 'react'
import { Button, Container } from 'reactstrap'

const PageNumbers = ({ page, setPage }) => {
    const decrementPage = () => page > 1 ? setPage(page - 1) : null
    const incrementPage = () => setPage(page + 1)
    return (
      <div>
        <Container className='pagination'>
          <Button className='button' outline onClick={ decrementPage }>Previous</Button>
          <p className='pageNum'>Page: {page} </p>
          <Button className='button' outline onClick={ incrementPage }>Next</Button>
        </Container>
      </div>
    )
}

export default PageNumbers