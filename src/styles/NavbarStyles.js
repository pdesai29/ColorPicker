import sizes from "./sizes";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    backgroundColor: "black",
    fontFamily: "Helvetica, sans-serif",
    color: "white",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "2rem",
    backgroundColor: "black",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: "-3px",
      },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    backgroundColor: "black",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&:after": {
      borderBottomColor: "white",
    },
  },
  span: {
    color: "white",
    fontFamily: "Roboto",
  },
  select: {
    color: "white",
  },
  menuitem: {
    color: "white",
  },
};
export default styles;
