import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import data from './data.json'

export function Home() {
  return (
    <div>
      <nav>
        <ul>
          {/* QUESTION: make home icon black with a-disabled class? */}
          <a className="fa-solid fa-house a-disabled" href=""></a>
          <li className="ml-mt ">Home</li>
        </ul>
      </nav>
      <section>
        <Link to="/pandas">
          <h2>{data.pandas.title}</h2>
        </Link>
        <h4>{data.pandas.description}</h4>
        <div>
          <Link to="/pandas">
            <img
              src={data.pandas.photos[0].imageURL}
              width="100%"
              alt={data.pandas.photos[0].title}
            />
          </Link>
        </div>
      </section>
      <section>
        <Link to="/miniatures">
          <h2>{data.miniatures.title}</h2>
        </Link>
        <h4>{data.miniatures.description}</h4>
        <div>
          <Link to="/miniatures">
            <img
              src={data.miniatures.photos[0].imageURL}
              width="100%"
              alt={data.miniatures.photos[0].title}
            />
          </Link>
        </div>
      </section>
      <Outlet />
    </div>
  )
}
