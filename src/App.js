import './Styles/main.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'

import CreateBarang from './Pages/Barang/Create'
import UpdateBarang from './Pages/Barang/Update'
import DetailBarang from './Pages/Barang/Detail'

import Barang from './Pages/Barang'
import Invoice from './Pages/Invoice'

const App = () => {
  return (
    <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Layout>
                <Route path="/barang" exact component={Barang} />
                <Route path="/barang/:id/detail" component={DetailBarang} />
                <Route path="/barang/:id/update" component={UpdateBarang} />
                <Route path="/barang/create" component={CreateBarang} />

                <Route path="/invoice" component={Invoice} />
                <Route path="/" exact component={Home} />
            </Layout>
          </Switch>
    </Router>
  )
}

export default App