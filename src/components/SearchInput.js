import React from "react";
import { Form } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <Form className="w-100" onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="search__group">
        <BiSearch className="search__group__icon" />
        <Form.Control
          type="text"
          placeholder="Search for documentations"
          id="searchInput"
          className="search__group__input"
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SearchInput;
