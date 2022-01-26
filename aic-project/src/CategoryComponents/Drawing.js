import React, { useEffect, useState } from 'react'
import { Card, CardImg, Row, Container, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const Drawing = () => {
  const [ art, setArt ] = useState([])

  useEffect(() => {
    const url = 'https://api.artic.edu/api/v1/artworks/search?q=drawing&fields=id,image_id,title,artist_title&limit=100&page=2'
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setArt(json.data)
      })
      .catch(console.error)
  }, [])
  return (
    <section>
      <Row xs='3'>
        {art.map(artwork => {
          return (
            artwork.image_id !== null ?
              <Container>
                <div>
                  <Card>
                    <Link to={ `/artwork/${ artwork.id }` } key={ artwork.id }>
                      <CardImg
                      alt={ artwork.title }
                      src={ `https://www.artic.edu/iiif/2/${ artwork.image_id }/full/843,/0/default.jpg` }
                      top
                      width="50%"
                    />
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

export default Drawing