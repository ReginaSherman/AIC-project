import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardText, Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'
import './Styles/Artwork.css'

const Artwork = () => {
    const { id } = useParams()
    const [ art, setArt ] = useState(null)
    const url = 'https://api.artic.edu/api/v1/artworks/'
    const newUrl = url + id

    useEffect(() => {
        fetch(newUrl)
            .then((res) => res.json())
            .then((json) => setArt(json.data))
            .catch((err) => console.log('Error!', err))
    }, [ newUrl ])

    if (!art) {
        return <Spinner className='spinner'>Loading...</Spinner>
    }

    return (
      <div>
        <h1>{ art.title } - {art.date_end}</h1>
        <Card>
          <CardImg className='card-img'
                    alt="Card image cap"
                    src={ `https://www.artic.edu/iiif/2/${ art.image_id }/full/843,/0/default.jpg` }
                    top width="50%"
                />
        </Card>
        <Card body className='card-body'>
          <CardText>
            { art.artist_title } 
          </CardText>
          <CardText>
            Place of Origin: { art.place_of_origin }
          </CardText>
          <CardText>
            Medium: {art.medium_display}
          </CardText>
          <CardText>
            Category: { art.artwork_type_title }
          </CardText>
          <CardText>
            { art.copyright_notice }
          </CardText>
          <CardText>
            
          </CardText>

        </Card>
      </div >
    )
}

export default Artwork