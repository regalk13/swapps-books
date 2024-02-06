// import { useState } from 'react'
import './App.css'
import React from 'react'
import NavBar from './NavBar.tsx'

function BookDetails() {
  return (
    <>
        <NavBar />
        <div className="details-image--title">
            <img className="details--image" src="https://covers.openlibrary.org/b/id/9255566-L.jpg" />
            <h1>The Lord of the Rings</h1>
        </div>
        
        <div className="details-image--title--desktop">
            <h1>The Lord of the Rings</h1>
        </div>
        <section className="details--text">        
            <p className="details--text-desc">
                Description: 
            </p>
            <p className="details--text-p">
                The main character of Fantastic Mr. Fox is an extremely clever anthropomorphized fox named Mr. Fox. He lives with his wife and four little foxes. In order to feed his family, he steals food from the cruel, brutish farmers named Boggis, Bunce, and Bean every night.\r\n\r\nFinally tired of being constantly outwitted by Mr. Fox, the farmers attempt to capture and kill him. The foxes escape in time by burrowing deep into the ground. The farmers decide to wait outside the hole for the foxes to emerge. Unable to leave the hole and steal food, Mr. Fox and his family begin to starve. Mr. Fox devises a plan to steal food from the farmers by tunneling into the ground and borrowing into the farmer's houses.\r\n\r\nAided by a friendly Badger, the animals bring the stolen food back and Mrs. Fox prepares a great celebratory banquet attended by the other starving animals and their families. Mr. Fox invites all the animals to live with him underground and says that he will provide food for them daily thanks to his underground passages. All the animals live happily and safely, while the farmers remain waiting outside in vain for Mr. Fox to show up.
            </p>
            <div className="button-container">
                <button className="details-button">Want to read</button>
                <button className="details-button">Already read</button>
            </div>
        </section>
    </>
  )
}

export default BookDetails
