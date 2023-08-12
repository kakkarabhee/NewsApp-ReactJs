import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home(props) {
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)

  async function getAPIData() {
    var response = ""
    try {
      if (props.search)
        var response = await fetch(`https://newsapi.org/v2/everything?page=1&q=${props.search}&language=${props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      else
        var response = await fetch(`https://newsapi.org/v2/everything?page=1&q=${props.q}&language=${props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      response = await response.json()
      setArticles(response.articles)
      setTotalResults(response.totalResults)
    }
    catch (error) { }
  }
  var fetchMoreData = async () => {
    setPage(page + 1)
    var response = ""
    try {
      if (props.search)
        var response = await fetch(`https://newsapi.org/v2/everything?page=${page}&q=${props.search}&language=${props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      else
        var response = await fetch(`https://newsapi.org/v2/everything?page=${page}&q=${props.q}&language=${props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      response = await response.json()
      setArticles(articles.concat(response.aricles))

    }

    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAPIData()
  }, [props])

  return (
    <div className="container-fluid">
      <h3 className='text-center'><hr />{props.search ? props.search : props.q} News <hr /></h3>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-3" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        }
      >
        <div className="row">
          {
            articles.map((item, index) => {
              return <NewsItems
                key={index}
                title={item.title.slice(0, 50) + "..."}
                description={item.description.slice(0, 200) + "..."}
                pic={item.urlToImage}
                url={item.url}
                source={item.source.name}
                date={item.publishedAt}
              />
            })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

