import React, { useState, useEffect } from 'react'
import { Card, CardImg, CardBody, CardSubtitle, Row, CardTitle, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import '../Styles/SearchBar.css'

const Search = ( placeholder, data ) => {
  const [ form, setFormState ] = useState('']\\)
  
  useEffect(() => {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${ query }&fields=id,image_id,title,artist_title&limit=20`
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setQuery(json.data)

      })
      .catch(console.error)
  }, [])

  const handleQuery = (event) => {
    set
    
    setQuery(searchWord)
  }
  
  return (
    <section>
      <div className='search'>
        <Container className='search-bar'>
          <div className='searchInputs'></div>
          <div className='searchIcon'>
            <input type='text' placeholder='What would you like to see?' onChange={ handleQuery }/> <SearchIcon />
          </div>
          <div className='dataResult'></div>
        </Container>
      </div>
      <Row xs='4'>
        {query.map(artwork => {
              return (
                artwork.length !== 0 && artwork.image_id !== null ?
                  <Container>
                    <div>
                      <Card>
                        <Link to={ `/artwork/${ artwork.id }` } key={ artwork.id }>
                          <CardImg
                            alt={ artwork.title }
                            src={ `https://www.artic.edu/iiif/2/${ artwork.image_id }/full/843,/0/default.jpg` }
                            top
                            width="50%" />
                        </Link>
                      </Card>
                      <Card>
                        <CardBody>
                          <CardTitle tag="h5">
                            {artwork.title}
                          </CardTitle>
                          <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                          >
                            {artwork.artist_title}
                          </CardSubtitle>
                        </CardBody>
                      </Card>
                    </div>
                  </Container> : null
              )
            })}
      </Row>
    </section>
      
    )
}

export default Search