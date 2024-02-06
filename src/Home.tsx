// import { useState } from 'react'
import './App.css'
import React from 'react'
import NavBar from './NavBar.tsx'
import BookBlock from './BookBlock.tsx'

function Home() {

  return (
    <>
        <NavBar />
        <section className="book-list">
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
        </section>
    </>
  )
}

export default Home
