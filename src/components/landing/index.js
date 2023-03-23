import React from 'react'
import Navbar from './navbar'
export default function index() {
  return (
    <div>
      <Navbar/>
        <h1>LANDING PAGE</h1>
        <a href="/register">Register</a> <br/>
        <a href="/login">Login</a>
    </div>
  )
}
