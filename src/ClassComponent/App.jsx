import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"

export default class app extends Component {
  constructor() {
    super()
    this.state = {
      language: "hi",
      
    }
  }
  changeLanguage = (language) => {
    this.setState({ language: language })
  }
  changeSearch = (search) => {
    this.setState({ search: search })
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} />
        <Routes>
          <Route path='/' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
          <Route path='/politics' element={<Home search={this.state.search} language={this.state.language} q="Politics" />} />
          <Route path='/crime' element={<Home search={this.state.search} language={this.state.language} q="Crime" />} />
          <Route path='/education' element={<Home search={this.state.search} language={this.state.language} q="Education" />} />
          <Route path='/technology' element={<Home search={this.state.search} language={this.state.language} q="Technology" />} />
          <Route path='/science' element={<Home search={this.state.search} language={this.state.language} q="Science" />} />
          <Route path='/sports' element={<Home search={this.state.search} language={this.state.language} q="Sports" />} />
          <Route path='/cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket" />} />
          <Route path='/ipl' element={<Home search={this.state.search} language={this.state.language} q="IPL" />} />
          <Route path='/entertainment' element={<Home search={this.state.search} language={this.state.language} q="Entertainment" />} />
          <Route path='/jokes' element={<Home search={this.state.search} language={this.state.language} q="Jokes" />} />
          <Route path='/from' element={<Home search={this.state.search} language={this.state.language} from="from" />} />
          <Route path='/to' element={<Home search={this.state.search} language={this.state.language} to="to" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}
