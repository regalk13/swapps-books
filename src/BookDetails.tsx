// import { useState } from 'react'
import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.tsx";
import { useSearchParams } from "react-router-dom";
function BookDetails() {
  const [searchParams] = useSearchParams();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const q = searchParams.get("q");

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${q}.json`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDesc(
          typeof data.description !== "object"
            ? data.description
            : data.description.value,
        );
        setImage(data.covers[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const imgLink = `https://covers.openlibrary.org/b/id/${image}-L.jpg`;
  return (
    <>
      <NavBar />
      <div className="details-image--title">
        <img className="details--image" src={imgLink} />
        <h1>{title}</h1>
      </div>

      <div className="details-image--title--desktop">
        <h1>{title}</h1>
      </div>
      <section className="details--text">
        <p className="details--text-desc">Description:</p>
        <p className="details--text-p">{desc}</p>
        <div className="button-container">
          <button className="details-button">Want to read</button>
          <button className="details-button">Already read</button>
        </div>
      </section>
    </>
  );
}

export default BookDetails;
