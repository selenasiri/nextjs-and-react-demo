// http://localhost:3000/:newsId

import { useRouter } from 'next/router'

function DetailPage () {
  const router = useRouter();

  console.log(router.query.newsId);

  // Send a request to the backend API 
  // to fetch news items by newsId

  return <h1>DetailPage [newsId].js</h1>
}

export default DetailPage;