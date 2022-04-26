import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './data.json'

export function PhotoList() {
  const params =
    useParams<{ categories: 'pandas' | 'miniatures'; photoIndex: string }>()
  console.log(params)
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
          <li className="text-color-rust ml-mt a-disabled">
            {data[params.categories!].title}
          </li>
        </ul>
      </nav>
      <section>
        <h2 className="a-disabled">{data[params.categories!].title}</h2>
        <h4>{data[params.categories!].description}</h4>
        <div>
          {data[params.categories!].photos.map((photo, index) => {
            return (
              <Link to={`./${index}`} key={index}>
                <img
                  src={photo.imageURL}
                  width="100%"
                  alt={photo.title}
                  key={index}
                />
                <div>{photo.title}</div>
                <br />
                <br />
              </Link>
            )
          })}
        </div>
      </section>
      {/* <section>
        <h2 className="a-disabled">{data.miniatures.title}</h2>
        <h4>{data.miniatures.description}</h4>
        <div>
          {data.miniatures.photos.map((photo, index) => {
            return (
              <Link to={`./${index}`} key={index}>
                <img
                  src={photo.imageURL}
                  width="100%"
                  alt={photo.title}
                  key={index}
                />
                <div>{photo.title}</div>
                <br />
                <br />
              </Link>
            )
          })}
        </div>
      </section> */}
    </div>
  )
}
