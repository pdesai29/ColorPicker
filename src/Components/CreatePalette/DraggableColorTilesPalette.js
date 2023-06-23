import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import DraggableColorTile from "./DraggableColorTile";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorTile
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});
export default DraggableColorList;
