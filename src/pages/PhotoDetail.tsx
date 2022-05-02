import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import data from './data.json'

export function PhotoDetail() {
  const params =
    useParams<{ categories: 'pandas' | 'miniatures'; photoIndex: string }>()

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
          <Link to={`/${params.categories!}`}>
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
      <section>
        <h2 className="a-disabled">
          {data[params.categories!].photos[Number(params.photoIndex)].title}
        </h2>
        <div>
          <img
            src={
              data[params.categories!].photos[Number(params.photoIndex)]
                .imageURL
            }
            width="100%"
            alt={
              data[params.categories!].photos[Number(params.photoIndex)].title
            }
          />
          <a
            className="text-color-rust"
            href={
              data[params.categories!].photos[Number(params.photoIndex)]
                .sourceURL
            }
          >
            Source
          </a>
          <br />
          <br />
        </div>
      </section>
    </div>
  )
}
