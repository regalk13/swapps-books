// import { useState } from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import React from 'react'
import NavBar from './NavBar.tsx'
import BookBlock from './BookBlock.tsx'
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [books, setBooks] = useState([]);

  const [searchParams] = useSearchParams();

  const q = searchParams.get('q') || "The+lord+of+the+rings";
  useEffect(() => {
    // Fetch data from the API
    fetch(`https://openlibrary.org/search.json?q=${q}?limit=2`)
      .then(response => response.json())
      .then(data => {
        // Extract books from the API response
        const retrievedBooks = data.docs.slice(0, 300) || []; // Limit to first 300 books
        setBooks(retrievedBooks);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run effect only once after initial render

  return (
    <>
        <NavBar />
        <section className="book-list">
           {books.map((book, index) => (
            <BookBlock key={index} data={book} />
            ))}
        </section>
    </>
  )
}

export default Home
