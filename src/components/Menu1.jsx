import { makeStyles } from "@mui/styles";
import { TbCommand } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineRight } from "react-icons/ai";
import { ImShift } from "react-icons/im";

import Hdivider from "./Hdivider";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "1.5rem",
    left: ".5rem",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "15rem",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    borderRadius: ".2rem",
    color: "rgba(255,255,255,.8)",
    padding: ".3rem 0",
    fontSize: ".8rem",
  },
  span: {
    width: "100%",
    textAlign: "left",
    paddingLeft: ".5rem",
    height: "1.5rem",
  },
});

const Menu1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.span}>About Me</span>
      <Hdivider />
      <span className={classes.span}>System Preferences...</span>
      <span
        className={classes.span}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        App Store...{" "}
        <span
          style={{
            marginRight: "1rem",
            backgroundColor: "rgba(255,255,255,.1)",
            width: "4rem",
            height: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1.2rem",
            fontSize: ".7rem",
          }}
        >
          5 updates
        </span>
      </span>
      <Hdivider />
      <span
        className={classes.span}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Recent Items
        <span
          style={{
            marginRight: "1rem",
            height: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1.2rem",
            fontSize: ".7rem",
          }}
        >
          <AiOutlineRight />
        </span>
      </span>
      <Hdivider />
      <span
        className={classes.span}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Force Quit...
        <span
          style={{
            marginRight: "1rem",
            height: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1.2rem",
            fontSize: ".8rem",
            color: "rgba(255,255,255,.3)",
          }}
        >
          <TbCommand />
          <VscDebugRestart />
        </span>
      </span>
      <Hdivider />
      <span className={classes.span}>Sleep</span>
      <span className={classes.span}>Restart...</span>
      <span className={classes.span}>Shut Down...</span>
      <Hdivider />
      <span
        className={classes.span}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Lock Screen{" "}
        <span
          style={{
            marginRight: "1rem",
            height: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1.2rem",
            fontSize: ".8rem",
            color: "rgba(255,255,255,.3)",
          }}
        >^<TbCommand />Q</span>
      </span>
      <span
        className={classes.span}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Log Out Tech & Design...{" "}
        <span
          style={{
            marginRight: "1rem",
            height: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1.2rem",
            fontSize: ".8rem",
            color: "rgba(255,255,255,.3)",
          }}
        ><ImShift/><TbCommand />Q</span>
      </span>
    </div>
  );
};

export default Menu1;
