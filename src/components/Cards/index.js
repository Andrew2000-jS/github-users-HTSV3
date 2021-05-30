import React, { useState } from 'react'
import axios from "axios"
import SearchIcon from '@material-ui/icons/Search'
import { Avatar, Card, CardContent, CardMedia, IconButton, Input, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    marginBottom: '30px'
  },
})

function Cards() {
  const [searchInput, setSearchInput] = useState('')
  const [profile, setProfile] = useState([])
  const [repo, setRepo] = useState([])


  const handleChange = e => setSearchInput(e.target.value)

  const handleCLick =  async () => { 
    const result = await axios(`https://api.github.com/users/${searchInput}`) 
    const repos = await axios(`https://api.github.com/users/${searchInput}/repos`) 
    const {data} = result
    const {data: info} = repos
    setRepo(info)
    setProfile(data)
 
  }

  const classes = useStyles()
  return (
    <> 
      <Input defaultValue={searchInput} onChange={handleChange}/>
      <IconButton onClick={handleCLick} >
        <SearchIcon />
      </IconButton>
      <Card className={classes.root}>
        <CardContent>
          <CardMedia className={classes.media}>
            <Avatar style={{height: '100%', width:'50%'}} src={profile.avatar_url} />
          </CardMedia>
          <Typography>
            {profile.login}
          </Typography>
          <Typography>
            Repositorys: {repo.length}
          </Typography>
        </CardContent>
      </Card>
    </>  
  )
}

export default Cards
