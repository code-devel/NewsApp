import React from "react";

const NewsItem = (props) => {
  let { title, description, ImageUrl, NewsUrl, author, publishedAt, source } =
    props;
  let date = new Date(publishedAt);
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <span
        className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
        style={{ left: "86%", zindex: "1" }}>
        {source}
        <span className="visually-hidden">unread messages</span>
      </span>
      <img
        src={!ImageUrl ? "https://picsum.photos/100/50" : ImageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description ? description : "Please click to go to the article"}...
        </p>
        <a
          href={NewsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-primary">
          Read More
        </a>
        <p className="card-text">
          <small className="text-body-secondary">
            By {!author ? "unknown" : author} on {date.toDateString()}
          </small>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
