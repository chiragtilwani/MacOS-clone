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
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
},
img: {
    width: "2.5rem",
    overflow:'visible',
    cursor: 'pointer',
    '&:hover':{
        transform: 'scale(1.5)',
  transition: 'transform 0.2s ease-out',
    }
  },
});
const Dock = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={connectLogo}  alt="connect" />
      <img className={classes.img} src={memoriesLogo} alt="memories" />
      <img className={classes.img} src={colorSelectorLogo} alt="colorSelector" />
      <img className={classes.img} src={todoLogo} alt="todo" />
      <img className={classes.img} src={dadJokeLogo} alt="dadJoke" />
      <img className={classes.img} src={pokemonLogo} alt="pokemon" />
      <img className={classes.img} src={hangmanLogo} alt="hangman" />
      <img className={classes.img} src={shoppingCartLogo} alt="hangman" />
      <img className={classes.img} src={portfolio} alt="hangman" />
    </div>
  );
};

export default Dock;
