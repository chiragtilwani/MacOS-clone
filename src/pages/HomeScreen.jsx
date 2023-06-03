import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { DiApple } from "react-icons/di";
import { BsBatteryHalf } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import macWall from "../assets/macWallpaper.jpg";
import Menu1 from "../components/Menu1";
import Dock from "../components/Dock";
import Application from "../components/Application";
import BlackScreen from "../components/BlackScreen";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
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
    cursor: "default",
  },
  topRight: {
    width: "15rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "rgba(255,255,255,.8)",
    fontSize: ".8rem",
    cursor: "default",
  },
  dateTime: {
    width: "7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center: {
    width: "100vw",
    height: "100%",
    position: "relative",
  },
  bottom: {
    position: "absolute",
    width: "100vw",
    bottom: ".5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const HomeScreen = () => {
  const classes = useStyles();
  const [logoClicked, setLogoClicked] = useState(false);
  const [openApps, setOpenApps] = useState([]);
  const [zIndex, setZIndex] = useState(1);
  const [sleep, setSleep] = useState(false);

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

  const allApps = [
    {
      name: "Connect",
      url: "https://connect-mern-socialmedia.netlify.app/",
      width: "50vw",
      height: "85vh",
      top: "1rem",
      left: "1rem",
    },
    {
      name: "Memories",
      url: "https://memories-chirag.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "2rem",
      left: "2rem",
    },
    {
      name: "colorSelector",
      url: "https://react-color-selector.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "2.5rem",
      left: "7rem",
    },
    {
      name: "Todo",
      url: "https://react-todo-app01.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "1rem",
      left: "4rem",
    },
    {
      name: "dadJoke",
      url: "https://dad-jokeeapp.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "3rem",
      left: "9rem",
    },
    {
      name: "Pokemon",
      url: "https://pokemon-chirag.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "4rem",
      left: "10rem",
    },
    {
      name: "Hangman",
      url: "https://hangman-game08.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "2rem",
      left: "1rem",
    },
    {
      name: "Shopping Cart",
      url: "https://redux-shoppingcart01.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "3rem",
      left: "1rem",
    },
    {
      name: "Portfolio",
      url: "https://redux-shoppingcart01.netlify.app",
      width: "50vw",
      height: "85vh",
      top: "2rem",
      left: "15rem",
    },
  ];

  function handleMenuOpen() {
    setLogoClicked(true);
  }

  function handleMenuClose() {
    setLogoClicked(false);
  }

  function modifyOpenApps(name) {
    setOpenApps((prevState) => [...prevState, name]);
  }

  function closeApps(name) {
    const modifiedOpenApps = openApps.filter((app) => app !== name);
    setOpenApps(modifiedOpenApps);
  }

  function handleSleep() {
    handleMenuClose();
    setSleep((prevState) => !prevState);
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
      <BlackScreen handleSleep={handleSleep} sleep={sleep} />

      <div className={classes.top}>
        {logoClicked ? <Menu1 handleSleep={handleSleep} /> : null}

        <div className={classes.topLeft}>
          <DiApple
            className={classes.appleIcon}
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,.7)",
              zIndex: "1",
            }}
            onClick={logoClicked ? handleMenuClose : handleMenuOpen}
          />

          <span className={classes.topSpan} onClick={handleMenuClose}>
            Finder
          </span>
          <span className={classes.topSpan} onClick={handleMenuClose}>
            File
          </span>
          <span className={classes.topSpan} onClick={handleMenuClose}>
            Edit
          </span>
          <span className={classes.topSpan} onClick={handleMenuClose}>
            View
          </span>
          <span className={classes.topSpan} onClick={handleMenuClose}>
            Go
          </span>
          <span className={classes.topSpan} onClick={handleMenuClose}>
            Window
          </span>
          <span className={classes.topSpan} onClick={handleMenuClose}>
            Help
          </span>
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

      <div className={classes.center} onClick={handleMenuClose}>
        {allApps.map((app) => {
          if (openApps.includes(app.name)) {
            return (
              <Application {...app} closeApps={closeApps} zIndex={zIndex} />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className={classes.bottom} onClick={handleMenuClose}>
        <Dock modifyOpenApps={modifyOpenApps} />
      </div>
    </div>
  );
};

export default HomeScreen;
