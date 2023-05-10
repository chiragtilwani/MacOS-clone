import { makeStyles } from "@mui/styles";

import macWall from '../assets/macWallpaper.jpg'

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
  },
});
const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={{
        background: `url(${macWall})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default HomeScreen;
