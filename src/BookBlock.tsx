import React from 'react'
import { Link } from 'react-router-dom';

export default function BookBlock() {

    return (
        <>
          <Link to="/destination-page" className="link--view">
                <div className="view--block">        
                    <div className="view--title-image">
                        <img className="view--image" src="https://covers.openlibrary.org/b/id/9255566-L.jpg" />
                        <h1>The Lord of the Rings</h1>
                    </div>
                    <div className="view--flex-info">
                        <div>
                            <p>Year: 1954</p>
                            <p>Pages: 1193</p>
                        </div>
                        <div>
                            <p>Rate: 4.5</p>
                            <p>Author: J.R.R. Tolkien</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
