import React, { Component } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    }
  }
  getInputData = async () => {
    try {
      if (this.props.search)
        var response = await fetch(`https://newsapi.org/v2/everything?page=1&q=${this.props.search}&language=${this.props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      else
        var response = await fetch(`https://newsapi.org/v2/everything?page=1&q=${this.props.q}&language=${this.props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      response = await response.json()
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults
      })
    }
    catch (error) { }
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    try {
      if (this.props.search)
        var response = await fetch(`https://newsapi.org/v2/everything?page=${this.state.page}&q=${this.props.search}&language=${this.props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      else
        var response = await fetch(`https://newsapi.org/v2/everything?page=${this.state.page}&q=${this.props.q}&language=${this.props.language}&pageSize=20&sortBy=popularity&apiKey=59ab9833cdf942908b0b763ca0f62d32`)
      response = await response.json()
      this.setState({
        articles: this.state.articles.concat(response.articles)
      })
    }
    catch (error) {

    }
  }
  componentDidMount() {
    this.getInputData()
  }
  componentDidUpdate(old) {
    if (this.props != old)
      this.getInputData()
  }
  render() {
    return (
      <div className="container-fluid">
        <h3 className='text-center'><hr />{this.props.search ? this.props.search : this.props.q} News <hr /></h3>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
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
              this.state.articles.map((item, index) => {
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
}
