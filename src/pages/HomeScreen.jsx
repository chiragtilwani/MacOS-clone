import { makeStyles } from "@mui/styles";
import { DiApple } from "react-icons/di";
import { BsBatteryHalf } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import macWall from "../assets/macWallpaper.jpg";
import Menu1 from "../components/Menu1";
import { useState } from "react";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
  },
  top: {
    width: "100vw",
    height: "1.5rem",
    backgroundColor: "rgba(0,0,0,.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topLeft: {
    color: "rgba(255,255,255,.8)",
    fontSize: ".8rem",
    width: "20rem",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  topRight: {
    width: "15rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "rgba(255,255,255,.8)",
    fontSize: ".8rem",
  },
  dateTime: {
    width: "7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
const HomeScreen = () => {
  const classes = useStyles();
  const [logoClicked, setLogoClicked] = useState(false);

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

  function handleMenuOpen() {
    setLogoClicked(true);
  }
  function handleMenuClose() {
    setLogoClicked(false);
  }
  return (
    <div
      className={classes.container}
      style={{
        background: `url(${macWall})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      <div className={classes.top}>
        {logoClicked?<Menu1 />:null}
        <div className={classes.topLeft}>
          <DiApple
            className={classes.appleIcon}
            style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)",zIndex:'1' }}
            onClick={logoClicked?handleMenuClose:handleMenuOpen}
          />
          <span className={classes.topSpan} onClick={handleMenuClose}>Finder</span>
          <span className={classes.topSpan} onClick={handleMenuClose}>File</span>
          <span className={classes.topSpan} onClick={handleMenuClose}>Edit</span>
          <span className={classes.topSpan} onClick={handleMenuClose}>View</span>
          <span className={classes.topSpan} onClick={handleMenuClose}>Go</span>
          <span className={classes.topSpan} onClick={handleMenuClose}>Window</span>
          <span className={classes.topSpan} onClick={handleMenuClose}>Help</span>
        </div>
        <div className={classes.topRight} onClick={handleMenuClose}>
          <span>India</span>
          <BsBatteryHalf />
          <AiOutlineWifi />
          <BiSearch />
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
      <div className={classes.center} onClick={handleMenuClose}></div>
      <div className={classes.bottom} onClick={handleMenuClose}></div>
    </div>
  );
};

export default HomeScreen;
