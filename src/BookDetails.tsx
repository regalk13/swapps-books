import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import "./App.css";

// BookDetails component to display book details
function BookDetails() {
  // Get search parameters from URL
  const [searchParams] = useSearchParams();

  // State hooks to manage book details
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const q = searchParams.get("q");

  // Fetch book details from API
  useEffect(() => {
    fetch(`https://openlibrary.org/works/${q}.json`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDesc(
          typeof data.description !== "object"
            ? data.description
            : data.description.value
        );
        setImage(data.covers[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Construct image link for book cover
  const imgLink = `https://covers.openlibrary.org/b/id/${image}-L.jpg`;

  return (
    <>
      <NavBar /> {/* Render navigation bar */}
      <div className="details-image--title">
        {/* Book cover image and title */}
        <img className="details--image" src={imgLink} alt="Book cover" />
        <h1>{title}</h1>
      </div>

      <div className="details-image--title--desktop">
        {/* Book title (desktop view) */}
        <h1>{title}</h1>
      </div>
      <section className="details--text">
        <p className="details--text-desc">Description:</p>
        <p className="details--text-p">{desc}</p>
        <div className="button-container">
          {/* Buttons for user actions */}
          <button className="details-button">Want to read</button>
          <button className="details-button">Already read</button>
        </div>
      </section>
    </>
  );
}

export default BookDetails; // Export BookDetails component as default

