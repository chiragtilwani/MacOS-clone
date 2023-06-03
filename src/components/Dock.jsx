import { makeStyles } from "@mui/styles";

import connectLogo from "../assets/connectLogo.png";
import memoriesLogo from "../assets/memoriesLogo.png";
import colorSelectorLogo from "../assets/colorSelectorLogo.png";
import todoLogo from "../assets/todoLogo.png";
import dadJokeLogo from "../assets/dadJokeLogo.png";
import pokemonLogo from "../assets/pokemonLogo.png";
import hangmanLogo from "../assets/hangmanLogo.png";
import shoppingCartLogo from "../assets/shoppingCartLogo.png";
import portfolio from "../assets/portfolio.png";

const useStyles = makeStyles({
  container: {
    width: "38%",
    height: "3rem",
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: ".5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  img: {
    width: "2rem",
    overflow: "visible",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.5)",
      transition: "transform 0.2s ease-out",
    },
  },
  Vdivider: {
    height: "70%",
    width: ".2rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "1.2rem",
  },
});

const Dock = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={connectLogo}
        alt="connect"
        onClick={() => props.modifyOpenApps("Connect")}
      />
      <img
        className={classes.img}
        src={memoriesLogo}
        alt="memories"
        onClick={() => props.modifyOpenApps("Memories")}
      />
      <img
        className={classes.img}
        src={colorSelectorLogo}
        alt="colorSelector"
        onClick={() => props.modifyOpenApps("colorSelector")}
      />
      <img
        className={classes.img}
        src={todoLogo}
        alt="todo"
        onClick={() => props.modifyOpenApps("Todo")}
      />
      <img
        className={classes.img}
        src={dadJokeLogo}
        alt="dadJoke"
        onClick={() => props.modifyOpenApps("dadJoke")}
      />
      <img
        className={classes.img}
        src={pokemonLogo}
        alt="pokemon"
        onClick={() => props.modifyOpenApps("Pokemon")}
      />
      <img
        className={classes.img}
        src={hangmanLogo}
        alt="hangman"
        onClick={() => props.modifyOpenApps("Hangman")}
      />
      <img
        className={classes.img}
        src={shoppingCartLogo}
        alt="shopping cart logo"
        onClick={() => props.modifyOpenApps("Shopping Cart")}
      />
      <span className={classes.Vdivider}></span>
      <img
        className={classes.img}
        src={portfolio}
        alt="portfolio"
        onClick={() => props.modifyOpenApps("Portfolio")}
      />
    </div>
  );
};

export default Dock;
