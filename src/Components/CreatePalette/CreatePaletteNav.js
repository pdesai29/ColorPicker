import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";

import styles from "../../styles/CreatePalette/CreatePaletteNavStyles";
import classNames from "classnames";

import PaletteSaveForm from "./PaletteSaveForm";

class CreatePaletteNav extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", formShowing: false };
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  showForm() {
    this.setState({ formShowing: true });
  }
  hideForm() {
    this.setState({ formShowing: false });
  }
  render() {
    const { classes, open, palettes, handleSubmit, handleDrawerOpen } =
      this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{ backgroundColor: "#272929" }}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showForm}
              className={classes.button}
              style={{ backgroundColor: "#34C67E", color: "black" }}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteSaveForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(CreatePaletteNav);
