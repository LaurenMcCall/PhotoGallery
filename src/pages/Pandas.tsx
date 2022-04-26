import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

export function Pandas() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <a className="fa-solid fa-house text-color-rust " href=""></a>
          </Link>
          <Link to="/">
            <li className="text-color-rust ml-mt">Home</li>
          </Link>
          <li className="text-color-rust ml-mt gray">/</li>
          <li className="text-color-rust ml-mt a-disabled"> Pandas</li>
        </ul>
      </nav>
      <section>
        <h2 className="a-disabled">{data.pandas.title}</h2>
        <h4>{data.pandas.description}</h4>
        <div>
          {data.pandas.photos.map((photo, index) => {
            return (
              <Link to={`./${index}`} key={index}>
                <img
                  src={photo.imageURL}
                  width="100%"
                  alt={photo.title}
                  key={index}
                />
                <div>{photo.title}</div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
