import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { Routes, Route, useParams } from 'react-router-dom'

const PageNumbers = () => {
    const [ page, setPage ] = useState(1)
    
    const url = `https://api.artic.edu/api/v1/artworks?page=${ page }&search?q=&fields=id,image_id,title,artist_title&limit=20`
    console.log(url)
    const updatePage = (page, prevNext) => {
        if (prevNext === 'previous') {
            return setPage(page-1)
        }
        else if (prevNext === 'next'){
            return setPage(page+1)
        }
    }

    useEffect ((page) => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setPage(json.data)
            
        })
        .catch((err) => console.log('Error!', err))
    }, [])

    return (
        
      <div>
        <Button className='button' outline onClick={ updatePage }>Previous</Button>
        {' '}
        <Button className='button' outline onClick={ updatePage }>Next</Button>
      </div>

        //Make previous button which uses updatePage function and give it a value of 'previous' 
        //Use a variable and put the page number between the two buttons
        //Make next button that uses updatePage function and give it a value of 'next'
        //in useEffect, watch page value so that when page changes it runs again
      
    )
}

export default PageNumbers