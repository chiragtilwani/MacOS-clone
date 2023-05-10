import { makeStyles } from "@mui/styles"

const useStyles =makeStyles({
    hdivider:{
        width:'90%',
        backgroundColor:'rgba(255,255,255,0.1)',
        height:'.1rem',
        margin:'auto'
    }
})

const Hdivider = () => {
    const classes=useStyles()
  return (
    <span className={classes.hdivider}></span>
  )
}

export default Hdivider