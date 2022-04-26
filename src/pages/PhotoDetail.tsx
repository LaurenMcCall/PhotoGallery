import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import data from './data.json'

export function PhotoDetail() {
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
          <Link to="/pandas">
            <li className="text-color-rust ml-mt">
              {data[params.categories!].title}
            </li>
          </Link>
          <li className="text-color-rust ml-mt gray">/</li>
          <li className="text-color-rust ml-mt a-disabled">
            {data[params.categories!].photos[Number(params.photoIndex)].title}
          </li>
        </ul>
      </nav>
      {/* <section>
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
