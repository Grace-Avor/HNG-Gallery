import React, { useState } from "react";
import { data } from "../../data";
import { Header, ImageCard, SearchInput } from "../../Components";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const filterGallery = data.filter(({ title }) =>
    title.toLowerCase().includes(searchValue)
  );

  return (
    <main className="MainContainer">
      <Header />
      <div className="searchfield--wrapper  outline-none">
        <SearchInput
          onChange={({ target }) => setSearchValue(target.value.toLowerCase())}
        />
      </div>

      <div className="Container">
        {filterGallery.map((pics) => (
          <ImageCard {...pics} />
        ))}
      </div>
    </main>
  );
};
