import React from "react";

export const SearchInput = (props) => {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Search by location "
        className="searchfield mt-5"
        onChange={props.onChange}
      />
    </form>
  );
};
