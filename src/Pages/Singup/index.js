import { Avatar, Grid, Paper, TextField, makeStyles, Button, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

import { useForm, Controller } from "react-hook-form"
import LockIcon from '@material-ui/icons/Lock'
const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto'
  },
  paperStyle: {
    padding: 20, 
    height: '60vh', 
    width: 200, 
    margin: '20px auto'
  },
  avatarStyle: {
    background:"#bdbd"
  },
  buttonStyle: {
    marginTop: '20%'
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
  },
  typoStyle: {
    marginTop: '5%'
  }
})

export default function Singup() {
  const classes = useStyles()
  const { control, handleSubmit } = useForm()


  const onSubmit = (data) => {
    const db = window.localStorage.getItem("database")
    const users = JSON.parse(db)
    if(!users) 
      window.localStorage.setItem("database", JSON.stringify([data]))
    else {
      users.push(data)
      window.localStorage.setItem("database", JSON.stringify(users))
    }
  }
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
              <Avatar className={classes.avatarStyle}>
                <LockIcon  />
              </Avatar>
              <h2>Sign Up</h2>
            </Grid>
            <Controller
              name="username"
              defaultValue=""
              control={control}
              render={({ field } = {}) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="standard"
                  label="Enter Username"
                  required
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field } = {} ) => (
                <TextField
                  {...field  || ''}
                  fullWidth
                  type="email"
                  variant="standard"
                  label="Enter Email"
                  required
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field  } = {}) => (
                <TextField
                  {...field}
                  type="password"
                  fullWidth
                  variant="standard"
                  label="Enter Password"
                  required
                />
              )}
            />
            <Button type="submit" color="primary" variant="contained" fullWidth className={classes.buttonStyle}>
          Sign Up
            </Button>
            <Typography className={classes.typoStyle}>
              <Link to="/signin" className={classes.linkStyle}>
              Do you have an account?
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
    </div>
  )
}
