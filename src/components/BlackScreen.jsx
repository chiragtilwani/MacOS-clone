import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    transitionDuration: ".2s",
  },
});
const BlackScreen = (props) => {
  const classes = useStyles();

  function handleBlackScreenClick() {
    props.handleSleep();
  }
  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: props.sleep ? "rgba(0,0,0,1)" : "rgba(255,255,255,0)",
        zIndex: props.sleep ? 6 : "",
      }}
      onClick={handleBlackScreenClick}
    ></div>
  );
};

export default BlackScreen;
