import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { data } from "../../data";
import { StrictModeDroppable } from "../../helper";
import { Header, ImageCard, SearchInput } from "../../Components";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [gallery, setGallery] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  const filterGallery = gallery.filter(({ title }) =>
    title.toLowerCase().includes(searchValue)
  );

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedGallery = [...gallery];
    const [reorderedItem] = updatedGallery.splice(result.source.index, 1);
    updatedGallery.splice(result.destination.index, 0, reorderedItem);
    setGallery(updatedGallery);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <main className="MainContainer">
      <Header />
      <div className="searchfield--wrapper  outline-none">
        <SearchInput
          onChange={({ target }) => setSearchValue(target.value.toLowerCase())}
        />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {isLoading ? (
          <p className="loading-text text-center">Loading...</p>
        ) : (
          <StrictModeDroppable droppableId="image-gallery">
            {(provided) => (
              <div
                className="Container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filterGallery.map((pics, index) => (
                  <ImageCard
                    {...pics}
                    key={pics.id}
                    id={pics.id}
                    index={index}
                  />
                ))}
              </div>
            )}
          </StrictModeDroppable>
        )}
      </DragDropContext>
    </main>
  );
};
