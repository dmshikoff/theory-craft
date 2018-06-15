import React from 'react'
import "../styles/cardlist.css"

const CardList = () => {
    return (
        <ul id="hexGrid">
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img src="http://cdn.shopify.com/s/files/1/2708/5996/products/543px-MajinBuuFatNV_1200x1200.png?v=1526920785" alt="" />
            <h1>About</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cNVhUw0RcVRmFpmG1ZQzUVUToUk8M05wnIJnADVq-TKFjgBl" alt="" />
            <h1>Beers</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img src="https://fortunedotcom.files.wordpress.com/2016/10/467650213.jpg" alt="" />
            <h1>Events</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img src="https://fortunedotcom.files.wordpress.com/2016/10/467650213.jpg" alt="" />
            <h1>Merch</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <img src="https://fortunedotcom.files.wordpress.com/2016/10/467650213.jpg" alt="" />
            <h1>Retail Locations</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
    </ul>
    )
}

export default CardList