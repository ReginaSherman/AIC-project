import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <ul>
            <h1>Categories</h1>
            <li><Link to='/CategoryResults'>Painting</Link></li>
            <li><Link to='/photograph'>Photograph</Link></li>
            <li><Link to='/drawing-watercolor'>Drawing & Watercolor</Link></li>
            <li><Link to='/print'>Print</Link></li>
            </ul>
        </div>
    )
}

export default Categories