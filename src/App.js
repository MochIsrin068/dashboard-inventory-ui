import './Styles/main.scss'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Layout from './Layout'
import Login from './Pages/Auth/Login'
import AuthContextProvider from './Context/AuthContext'
import Routes from './routes'

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Layout>
                <Routes/>
            </Layout>
          </Switch>
      </Router>
    </AuthContextProvider>
  )
}

export default App