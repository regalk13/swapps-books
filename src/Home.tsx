// Import necessary hooks and components from React and other libraries
import React, { useState, useEffect, CSSProperties } from "react";
import { useSearchParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from "./NavBar.tsx";
import BookBlock from "./BookBlock.tsx";

// Functional component to display a message when no books are found
function NoBooksMessage() {
  return (
    <div>
      <p>No books found. Try searching for a book!</p>
    </div>
  );
}

// Home component to display the book list
function Home() {
  // State hooks to manage books data and loading state
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get search parameters from the URL
  const [searchParams] = useSearchParams();

  // State and CSS override for loading spinner
  let [color, _] = useState("#ffffff");
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  // Get the search query from URL and fetch books data from API
  const q = searchParams.get("q") || "";
  useEffect(() => {
    // Fetch data from the API
    fetch(`https://openlibrary.org/search.json?q=${q}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        // Extract books from the API response
        const retrievedBooks = data.docs.slice(0, 300) || []; // Limit to first 300 books
        setBooks(retrievedBooks);
        setLoading(false); // Set loading state to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log error if data fetching fails
      });
  }, []); // Empty dependency array to run effect only once after initial render

  return (
    <>
      <NavBar /> {/* Render navigation bar component */}
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
          // Map through books array and render BookBlock component for each book
          books.map((book, index) => <BookBlock key={index} data={book} />)
        )}
      </section>
    </>
  );
}

export default Home; // Export Home component as default
