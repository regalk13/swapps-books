// import { useState } from 'react'
import { useState, useEffect, CSSProperties } from "react";
import "./App.css";
import React from "react";
import NavBar from "./NavBar.tsx";
import BookBlock from "./BookBlock.tsx";
import { useSearchParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function NoBooksMessage() {
  return (
    <div>
      <p>No books found. Try searching for a book!</p>
    </div>
  );
}
function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  let [color, _] = useState("#ffffff");
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  const q = searchParams.get("q") || "";
  useEffect(() => {
    // Fetch data from the API
    fetch(`https://openlibrary.org/search.json?q=${q}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        // Extract books from the API response
        const retrievedBooks = data.docs.slice(0, 300) || []; // Limit to first 300 books
        setBooks(retrievedBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run effect only once after initial render

  return (
    <>
      <NavBar />
      <section className="book-list">
        {loading ? ( // Show loading animation while data is being fetched
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : books.length === 0 ? ( // Check if there are no books
          <NoBooksMessage />
        ) : (
          books.map((book, index) => <BookBlock key={index} data={book} />)
        )}
      </section>
    </>
  );
}

export default Home;
