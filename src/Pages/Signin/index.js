import { Avatar, Button,  Grid, Paper, TextField, makeStyles, Typography } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import {Link} from "react-router-dom"
import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useState } from "react"

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
    marginTop: '30%'
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
  },
  typoStyle: {
    marginTop: '10%'
  }
})
export default function Signin() {
  const [error, setError] = useState('')
  const classes = useStyles()
  const { control, handleSubmit } = useForm()


  const onSubmit = (data) => {
    const db = window.localStorage.getItem("database")
    const users = JSON.parse(db)

    if(!users) setTimeout(() => setError('User not found'), 1000)
    else if (users.password === data.password) {
      window.localStorage.setItem("database", JSON.stringify(data))
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <div>
        {
          error 
            ? <h1 style={{textAlign: 'center'}}>{error}</h1>
            :null 
        }
      </div>
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align='center'>
            <Avatar className={classes.avatarStyle}>
              <LockOpenIcon  />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="standard"
                type="username"
                label="username"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="standard"
                type="password"
                label="Password"
              />
            )}
          />
          <Button type="submit" color="primary" variant="contained" fullWidth className={classes.buttonStyle}>
          Sign In
          </Button>
          <Typography className={classes.typoStyle}>
            <Link to="/singup" className={classes.linkStyle}>
            Don't you have an account?
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </form>
  )
}
