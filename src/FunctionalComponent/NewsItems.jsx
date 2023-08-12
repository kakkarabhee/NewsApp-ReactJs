import React from 'react'

export default function NewsItems(props) {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card my-1">
                    {
                        props.pic?
                            <img src={props.pic} className="card-img-top" alt="..." /> :
                            <img src="/images/image.jpg" className="card-img-top" alt="..." />
                    }
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <div className="d-flex justify-content-between">
                            <h6 className='date'>{props.source}</h6>
                            <h6 className='date'>{props.date}</h6>
                        </div>
                        <hr />
                        <p className="card-text">{props.description}</p>

                       <a href={props.url} target='_blank' className="btn background w-100 btn-sm">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
