import {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import CreateBarang from './Pages/Barang/Create'
import UpdateBarang from './Pages/Barang/Update'
import DetailBarang from './Pages/Barang/Detail'
import Home from './Pages/Home'
import Barang from './Pages/Barang'
import Invoice from './Pages/Invoice'

import {AuthContextInitialization} from './Context/AuthContext'

const Routes = () => {
    const authContext = useContext(AuthContextInitialization)
    return (
        <>
            <Route path="/barang" exact component={Barang} />
            <Route path="/barang/:id/detail" component={DetailBarang} />
            <Route path="/barang/:id/update" component={UpdateBarang} />
            <Route path="/barang/create" component={CreateBarang} />

            <Route path="/invoice" component={Invoice} />
            <Route exact path="/">
                {authContext.isLoggedIn ? <Home /> : <Redirect to="/login" />}
            </Route>
        </>
    )
}

export default Routes