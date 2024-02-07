import React from "react";
import { Link } from "react-router-dom";

// BookBlock component to display book information
export default function BookBlock({ data }: { data: any }) {
  // Construct image URL for book cover
  const imageURL = data.cover_i
    ? `https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  // Regular expression to extract book ID from data key
  const regex = /works\/([A-Za-z0-9]+)$/;
  const match = String(data.key).match(regex);
  console.log(match);

  // Construct link for book details page based on extracted book ID
  const dataLink = match ? `/bookdetails?q=${match[1]}` : "/bookdetails?q=null";

  return (
    <>
      {/* Link to book details page */}
      <Link to={dataLink} className="link--view">
        <div className="view--block">
          <div className="view--title-image">
            {/* Book cover image */}
            <img className="view--image" src={imageURL} loading="lazy" alt="Book cover" />
            {/* Book title */}
            <h1>{data.title}</h1>
          </div>

          <div className="view--title-image-desktop">
            {/* Book cover image (desktop view) */}
            <img className="view--image-desktop" src={imageURL} loading="lazy" alt="Book cover" />
            {/* Book title (desktop view) */}
            <h1>{data.title}</h1>
          </div>

          {/* Book information */}
          <div className="view--flex-info">
            <div>
              <p>
                Year:{" "}
                {data.first_publish_year
                  ? data.first_publish_year
                  : "No data years"}
              </p>
              <p>
                Pages:{" "}
                {data.number_of_pages_median
                  ? data.number_of_pages_median
                  : "No data pages"}
              </p>
            </div>
            <div>
              <p>
                Rate:{" "}
                {data.ratings_average
                  ? data.ratings_average.toFixed(1)
                  : "No rate"}
              </p>
              <p>
                Author: {data.author_name ? data.author_name : "No data name"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

