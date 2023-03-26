import React from "react";
import { Link } from "react-router-dom";
import Line from "./Line";

const SearchResult = ({ link, title, description }) => {
  return (
    <>
      <div className="search__results__card">
        <Link to={`/${link}`}>
          <h5 className="search__results__title">{title}</h5>
        </Link>
        <p className="search__results__description">{description}</p>
      </div>
      <Line background="#0091BD" height="2px" />
    </>
  );
};

export default SearchResult;
