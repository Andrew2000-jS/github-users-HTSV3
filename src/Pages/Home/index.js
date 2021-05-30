import { useState, useEffect } from "react"
import { Grow } from "@material-ui/core"

import { Container, HomeTitle } from "./styles"

export default function Home() {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked((prev) => !prev)
  }, [])

  return (
    <>
      <Grow 
        in={checked} 
        {...(checked ? { timeout: 1000 } : {})} 
        collapsedHeight={500} 
      >
        <Container>
          <HomeTitle>
        Welcome to my App
          </HomeTitle>
        </Container>
      </Grow>
    </>
  )
}

