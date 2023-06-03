import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ImCancelCircle } from "react-icons/im";
import { BsBatteryHalf } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";

import macWall from "../assets/macWallpaper.jpg";
import portfoliocircular from "../assets/portfoliocircular.png";
import openLidSound from "../assets/openLidSound.mp3";
import HomeScreen from "./HomeScreen";

const useStyles = makeStyles({
  backdrop: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,.1)",
    top: 0,
    zIndex: 1,
  },
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundSize: "100% 100%",
  },
  top: {
    width: "100vw",
    height: "2rem",
  },
  topContainer: {
    height: "1.5rem",
    width: "15rem",
    float: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "white",
    fontSize: ".8rem",
  },
  dateTime: {
    width: "7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center: {
    width: "100vw",
    height: "25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  profileImg: {
    width: "7rem",
    marginBottom: "1rem",
  },
  nameSpan: {
    marginBottom: "1rem",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  para: {
    color: "white",
  },
  bottom: {
    width: "100vw",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  cancelContainer: {
    position: "absolute",
    top: "-5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cancelIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    backgroundColor: "rgba(0,0,0,.1)",
    color: "white",
    borderRadius: "50%",
    fontSize: "1.5rem",
  },
  cancelSpan: {
    color: "white",
    fontWeight: "400",
  },
});

const LockScreen = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  const audio = new Audio(openLidSound);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let date = new Date();
  const day = date.getDay();
  const dayName = days[day];
  const DateNumber = date.getDate();
  const month = date.getMonth();
  const monthName = monthNames[month];
  const hour = date.getHours();
  const minute = date.getMinutes();

  function handleClick() {
    setClicked((prevState) => !prevState);
    audio.play();
  }

  if (!clicked) {
    return (
      <>
        <div className={classes.backdrop} onClick={handleClick}></div>
        <div
          className={classes.container}
          style={{
            background: `url(${macWall})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={classes.top}>
            <div className={classes.topContainer}>
              <span>India</span>
              <BsBatteryHalf />
              <AiOutlineWifi />
              <div className={classes.dateTime}>
                <span>{dayName}</span>
                <span>{DateNumber}</span>
                <span>{monthName}</span>
                <span>
                  {hour} : {minute}
                </span>
              </div>
            </div>
          </div>
          <div className={classes.center}>
            <img
              className={classes.profileImg}
              src={portfoliocircular}
              alt=""
            />
            <span className={classes.nameSpan}>Chirag Tilwani</span>
            <p className={classes.para}>Click anywhere to unlock.</p>
            <p className={classes.para}>Press F11 for better experience.</p>
          </div>
          <div className={classes.bottom}>
            <div className={classes.cancelContainer}>
              <span className={classes.cancelIcon}>
                <ImCancelCircle />
              </span>
              <span className={classes.cancelSpan}>Cancel</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <HomeScreen />;
  }
};

export default LockScreen;
