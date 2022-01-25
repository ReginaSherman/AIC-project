import React from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'

const Categories = () => {
  return (
    <div>
      <Container>
        <ListGroup flush>
          <ListGroupItem
            href='/painting'
            tag="a"
          >
            Painting
          </ListGroupItem>
          <ListGroupItem
            href='/watercolor'
            tag="a"
          >
            Watercolor
          </ListGroupItem>
          <ListGroupItem
            href='/drawing'
            tag="a"
          >
            Drawing
          </ListGroupItem>
          <ListGroupItem
            href='/photograph'
            tag="a"
          >
            Photography
          </ListGroupItem>
        </ListGroup>
      </Container>

    </div>
  )
}

export default Categories