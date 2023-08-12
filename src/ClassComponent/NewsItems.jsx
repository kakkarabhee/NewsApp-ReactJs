import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card my-1">
                    {
                        this.props.pic?
                            <img src={this.props.pic} className="card-img-top" alt="..." /> :
                            <img src="/images/image.jpg" className="card-img-top" alt="..." />
                    }
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className="d-flex justify-content-between">
                            <h6 className='date'>{this.props.source}</h6>
                            <h6 className='date'>{this.props.date}</h6>
                        </div>
                        <hr />
                        <p className="card-text">{this.props.description}</p>

                       <a href={this.props.url} target='_blank' className="btn background w-100 btn-sm mb-4">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
