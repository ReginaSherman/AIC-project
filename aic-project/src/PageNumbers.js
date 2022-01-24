import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Routes, Route } from 'react-router-dom'



const PageNumbers = (props) => {
    const {url} = props
    return (
        <>
            <Pagination
                aria-label="Page navigation example"
                size='sm'
            >
                <PaginationItem>
                    <PaginationLink
                        first
                        href='#'
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href='#'
                        previous
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='/'>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href= {url + '/page=2'}>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="/page=3">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        last
                    />
                </PaginationItem>
            </Pagination>
            <Routes>
                <Route path='/page=2'/>
            </Routes>
        </>
    )
}

export default PageNumbers