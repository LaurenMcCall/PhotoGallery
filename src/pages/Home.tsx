import React from 'react'
// import { Link } from 'react-router-dom'
import data from './data.json'

export function Home() {
  return (
    <div>
      <nav>
        <ul>
          {/* <Link to="/"> */}
          <a className="fa-solid fa-house text-color-rust " href=""></a>
          {/* </Link> */}
          <li className="text-color-rust ml-mt">Home</li>
        </ul>
      </nav>
      <section>
        <h2>{data.pandas.title}</h2>
        <h4>{data.pandas.description}</h4>
        <div>
          <img
            src={data.pandas.photos[0].imageURL}
            width="100%"
            alt={data.pandas.photos[0].title}
          />
        </div>
      </section>
      <section>
        <h2>{data.miniatures.title}</h2>
        <h4>{data.miniatures.description}</h4>
        <div>
          <img
            src={data.miniatures.photos[0].imageURL}
            width="100%"
            alt={data.miniatures.photos[0].title}
          />
        </div>
      </section>
    </div>
  )
}
