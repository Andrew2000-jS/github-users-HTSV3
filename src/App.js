import Routes from "./router/Routes"
import Layout from "./components/Layout"
import { BrowserRouter as Router } from "react-router-dom"

import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./config/themeConfig"
import AuthProvider from "./context/AuthProvider"

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
