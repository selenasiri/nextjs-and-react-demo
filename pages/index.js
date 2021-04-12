// our-domain.com/
import Link from 'next/link'
import { Fragment } from "react";

function HomePage () {

  return <Fragment>
    <h1>Home Page</h1>
    <ul>
      <li><Link href="/news">News Page</Link></li>
      <li><Link href="/news/:newsId">Detail Page, News Id</Link></li>
    </ul>
  </Fragment>

}

export default HomePage;