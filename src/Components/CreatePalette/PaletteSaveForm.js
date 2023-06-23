import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";

import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import styles from "../../styles/CreatePalette/PaletteSaveFormStyles";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }
  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: "" });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { newPaletteName, stage } = this.state;
    const { hideForm, classes } = this.props;

    return (
      <div>
        <Dialog
          className={classes.Dialog}
          open={stage === "emoji"}
          onClose={hideForm}
        >
          <DialogTitle id="form-dialog-title" className={classes.DialogTitle}>
            Choose a Palette Emoji
          </DialogTitle>
          <Picker
            title="Pick a Palette Emoji"
            onSelect={this.savePalette}
            className={classes.Picker}
          />
        </Dialog>

        <Dialog
          open={stage === "form"}
          aria-labelledby="form-dialog-title"
          onClose={hideForm}
        >
          <DialogTitle
            id="form-dialog-title"
            // style={{
            //   color: "white",
            //   backgroundColor: "black",
            //   borderBottom: "solid #272929 1px",
            // }}
            className={classes.DialogTitle}
          >
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure
                it's unique!
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} style={{ color: "black" }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ color: "white", backgroundColor: "black" }}
                type="submit"
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteMetaForm);
