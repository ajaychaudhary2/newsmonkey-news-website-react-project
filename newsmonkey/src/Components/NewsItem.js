import React from 'react'

const NewsItem=(props)=>  {
   
        let { title, dicription, imageUrl, newsUrl, author, date,source } = props;
        return (

            <div >
                <div className="card">
                    <div style={{display: 'flex',
                justifyContent: 'flex-start',
                position: 'absolute',
                right: '0'}}><span className="badge   " style={{zIndex:"1", left:"88%"}}>
    {source}</span></div>
                

                    <img src={!imageUrl ? "https:www.livemint.com/lm-img/img/2023/09/05/600x338/AFP_1NP7HM_1579664517272_1693892112885.jpg" : imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{dicription}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className=" btn-sm btn btn-outline-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
   
}

export default NewsItem
