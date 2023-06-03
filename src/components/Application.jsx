import Draggable from "react-draggable";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  appContainer: {
    width: "50vw",
    position: "absolute",
    top: "1rem",
    left: "1rem",
    zIndex: 1,
    cursor: "move",
    color: "black",
    borderRadius: " 5px",
    userSelect: "none",
  },
  titleBar: {
    width: "100%",
    height: "1.375rem",
    backgroundColor: "#333333",
    borderRadius: ".3rem .3rem 0 0",
    display: "flex",
    alignItems: "center",
  },
  titleBarLeft: {
    width: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    height: "1.375rem",
  },
  titleBarCenter: {
    color: "white",
    width: "100%",
  },
});

const Application = (props) => {
  const classes = useStyles();
  const [maximize, setMaximize] = useState(false);
  const [zIndex, setZIndex] = useState(props.zIndex);

  function handleClose() {
    props.closeApps(props.name);
  }

  function handleMaximize() {
    setMaximize((prevState) => !prevState);
  }

  function handleChangeZindex() {
    setZIndex((prevState) => prevState + 1);
  }

  return (
    <Draggable>
      <div
        className={classes.appContainer}
        style={{
          width: maximize ? "100vw" : props.width,
          height: maximize ? "100vh" : props.height,
          top: maximize ? "-1.38rem" : props.top,
          left: maximize ? 0 : props.left,
          zIndex: zIndex,
          transitionDuration: ".1s",
        }}
        onClick={handleChangeZindex}
      >
        <div className={classes.titleBar}>
          <div className={classes.titleBarLeft}>
            <span
              style={{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                backgroundColor: "#ff544d",
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={handleClose}
            ></span>
            <span
              style={{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                backgroundColor: "#fdb329",
                display: "inline-block",
                cursor: "pointer",
              }}
            ></span>
            <span
              style={{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                backgroundColor: "#24c138",
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={handleMaximize}
            ></span>
          </div>
          <div className={classes.titleBarCenter}>{props.name}</div>
        </div>
        <iframe
          src={props.url}
          frameborder="0"
          style={{
            width: maximize ? "100%" : props.width,
            height: maximize ? "100%" : props.height,
            top: props.top,
            left: props.left,
            transitionDuration: ".1s",
          }}
          title={props.name}
        ></iframe>
        <div
          className="bottomHandle"
          style={{
            width: "100%",
            height: "1.375rem",
            backgroundColor: "#333333",
            borderRadius: "0 0 .3rem .3rem",
          }}
          onClick={handleChangeZindex}
        ></div>
      </div>
    </Draggable>
  );
};

export default Application;
