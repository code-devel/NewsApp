import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=db79cb705d94437bb97a3468faa3604c&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
    console.log(totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className="text-center" style={{ margin: "90px 0px 0px" }}>
        NewsFeed - {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className="container my-3">
          <div className="row mt-4 justify-content-center">
            {articles.map((e, index) => {
              return (
                <div className="col-md-4 card-group" key={index}>
                  <NewsItem
                    title={e.title?.slice(0, 40)}
                    description={e.description?.slice(0, 88)}
                    ImageUrl={e.urlToImage}
                    NewsUrl={e.url}
                    author={e.author}
                    publishedAt={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="row justify-content-center">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              {!this.state.loading && (
                <button
                  type="button"
                  disabled={this.state.page <= 1}
                  className="btn btn-dark mx-2"
                  onClick={this.handlePrevClick}
                >
                  &larr; Previous
                </button>
              )}
            </li>
            <li className="page-item">
              {!this.state.loading && (
                <button
                  type="button"
                  className="btn btn-dark mx-2"
                  onClick={this.handleNextClick}
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                >
                  Next &rarr;
                </button>
              )}
            </li>
          </ul>
        </div> */}
    </>
  );
};

News.defaultProps = {
  pageSize: "18",
  country: "in",
  category: "sports",
};

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

export default News;
