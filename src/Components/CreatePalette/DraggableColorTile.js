import React from "react";
import { SortableElement } from "react-sortable-hoc";

import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "../../styles/CreatePalette/DraggableColorTileStyles";

const DraggableColorBox = SortableElement((props) => {
  const { classes, handleClick, name, color } = props;
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color, boxShadow: "3px 5px 5px black" }}
    >
      <div className={classes.boxContent}>
        <span> {name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);
