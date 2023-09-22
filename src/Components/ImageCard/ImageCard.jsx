import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const ImageCard = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          className="First-row"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="images">
            <img src={props.url} alt={props.title} loading="lazy" />
            <p className="text-center fw-bold firstP">{props.title}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};
