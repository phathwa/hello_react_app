import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>React App</h1>
            <Link style={linkstyle} to="/">Home</Link> | <Link style={linkstyle} to="/about"> About</Link>
        </header>
    )
}

const headerStyle = {
    background: 'grey',
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
  }

const linkstyle = {
    color: '#fff',
    textDecoration: 'none'
}
