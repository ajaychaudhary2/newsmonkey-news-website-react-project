import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner1'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// document.title = `${capitalizeFirstLetter(props.category)} - Newsmonkey`

const News =
    (props) => {
        const [articles, setArticles] = useState([]);
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);
        const [totalResults, setTotalResults] = useState(0);
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }


        const updateNews = async () => {
            props.setProgress(0);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c66812ca442450bae56a7ea5956c1c4&page=${page}&pageSize=${props.pageSize}`;
            props.setProgress(30);
          setLoading(true)
            let data = await fetch(url);
            props.setProgress(50);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)

            props.setProgress(100);
        }
       useEffect(()=> {
        updateNews();
        

// eslint-disable-next-line
       },[])

       const fetchMoreData = async () => {
          
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c66812ca442450bae56a7ea5956c1c4&page=${page + 1}&pageSize=${props.pageSize}`;
            setPage(page + 1)
            setLoading(true)
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults( parsedData.totalResults);
            
           
        };
 


        return (

            <div className=' my-3'>
                <h1 className="text-center h1">News <span className="clr">Monkey</span> - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
             
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4><Spinner /></h4>}
                >
                    <div className="row my-5 mx-4" >
                        {articles.map((element) => {
                            return <div className="col-md-3 item" >
                                <NewsItem title={element.title ? element.title.slice(0, 35) : ""} dicription={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}



                    </div>
                </InfiniteScroll>


            </div>
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 50,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string


}
export default News
