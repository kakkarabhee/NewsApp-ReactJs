import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      language: "hi",
      search: ""
    }
  }
  changeLanguage = () => {
    if (this.state.language === "hi") {
      this.setState({ language: "en" })
      document.getElementById("language").innerHTML = "हिंदी"
      this.props.changeLanguage("en")
    }
    else {
      this.setState({ language: "hi" })
      document.getElementById("language").innerHTML = "English"
      this.props.changeLanguage("hi")
    }
  }
  getInputData = (e) => {
    this.setState({ search: e.target.value })
  }
  postData = (e) => {
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({ search: "" })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={() => this.props.changeSearch("")} >Abhi-तक</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => this.props.changeSearch("")} >All</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/politics" onClick={() => this.props.changeSearch("")} >Politics</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/crime" onClick={() => this.props.changeSearch("")} >Crime</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/education" onClick={() => this.props.changeSearch("")} >Education</Link>
              </li>
              <li className="nav-item dropdown mx-2">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More...
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/technology" onClick={() => this.props.changeSearch("")} >Technology</Link></li>
                  <li><Link className="dropdown-item" to="/science" onClick={() => this.props.changeSearch("")} >Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports" onClick={() => this.props.changeSearch("")} >Sports</Link></li>
                  <li><Link className="dropdown-item" to="/cricket" onClick={() => this.props.changeSearch("")} >Cricket</Link></li>
                  <li><Link className="dropdown-item" to="/ipl" onClick={() => this.props.changeSearch("")} >IPL</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment" onClick={() => this.props.changeSearch("")} >Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/jokes" onClick={() => this.props.changeSearch("")} >Jokes</Link></li>
                </ul>
              </li>
              <li>
                <div className="form-check form-switch my-2 mx-2">
                  <input className="form-check-input" type="checkbox" onChange={() => this.changeLanguage()} role="switch" id="languageSelector" />
                  <label className="form-check-label text-white" id="language" htmlFor="language">English</label>
                </div>
              </li>
             
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => this.postData(e)}>
              <input className="form-control me-2" name='search' onChange={(e) => this.getInputData(e)} type="search" value={this.state.search} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
