import { makeStyles } from "@mui/styles";
import appleIcon from "../assets/appleIcon.png";

const useStyles = makeStyles({
  "@keyframes loaderWidth": {
    from: {
      width: 0,
    },
    to: {
      width: "15rem",
    },
  },
  "@keyframes overlayBG": {
    from: {
      top: 0,
    },
    to: {
      top: "-100vh",
      display: "none",
    },
  },
  container: {
    backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    top: "0",
    animation: "$overlayBG 2s ease-in 3s forwards",
  },
  inneContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "10rem",
    width: "15rem",
  },
  appleIcon: {
    width: "5rem",
    alignSelf: "center",
  },
  loadingSpanContainer: {
    width: "15rem",
    backgroundColor: "grey",
  },
  loadingSpan: {
    width: "15rem",
    height: ".2rem",
    backgroundColor: "#fcfefc",
    alignSelf: "flex-start",
    float: "left",
    animation: "$loaderWidth 3s ease-in",
  },
});
const StartOverlay = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inneContainer}>
        <img className={classes.appleIcon} src={appleIcon} alt="apple icon" />
        <span className={classes.loadingSpanContainer}>
          <span className={classes.loadingSpan}></span>
        </span>
      </div>
    </div>
  );
};

export default StartOverlay;
