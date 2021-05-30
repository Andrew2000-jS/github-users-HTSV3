import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton } from "@material-ui/core"
import { Link, Logo } from "./styles"

import SortIcon from '@material-ui/icons/Sort'

const useStyles = makeStyles(theme =>  ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    margin: '0 auto'
  },
  icon: {
    color: '#fff',
    fontSize: '2rem'
  }, 
  appbar: {
    fontFamily: "Nunito"
  }, 
}))

export default function Navigation() {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Logo to="/">App</Logo>
          </Typography>
          <Typography>
            <Link to="/signin">
              <Button color="secondary">Login</Button>
            </Link>
            <Link to="/singup">
              <Button color="secondary">Sing Up</Button>
            </Link>
          </Typography>

          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}
