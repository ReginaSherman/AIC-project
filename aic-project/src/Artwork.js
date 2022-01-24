import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardText, Spinner } from 'reactstrap'
import { useParams } from 'react-router-dom'

const Artwork = () => {
    let { id } = useParams()
    const [art, setArt] = useState(null)
    const url = 'https://api.artic.edu/api/v1/artworks/'
    let newUrl = url + id

    useEffect(() => {
        fetch(newUrl)
            .then((res) => res.json())
            .then((json) => setArt(json.data))
            .catch((err) => console.log('Error!', err))
    }, [newUrl])

    if (!art) {
        return <Spinner className='spinner'>Loading...</Spinner>
    }

    return (
        <div>
            <h1>{ art.title } - {art.date_end}</h1>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    top width="50%"
                />
            </Card>
            <Card body>
                 <CardText>
                    { art.artist_title } 
                </CardText>
                <CardText>
                    
                </CardText>
                <CardText>
                    Category: { art.artwork_type_title }
                </CardText>
                <CardText>
                    { art.copyright_notice }
                </CardText>
            </Card>
        </div >
    )
}

export default Artwork