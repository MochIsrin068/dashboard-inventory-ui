import {useContext} from 'react'
import {NavLink, Link, useLocation, useHistory} from 'react-router-dom'
import { ReactComponent as IconSetting } from '../Assets/Images/setting.svg';

import { ReactComponent as IconOverview } from '../Assets/Images/overview.svg';
import { ReactComponent as IconBarang } from '../Assets/Images/barang.svg';
import { ReactComponent as IconInvoice } from '../Assets/Images/invoice.svg';

import { ReactComponent as IconOverviewActive } from '../Assets/Images/overview-active.svg';
import { ReactComponent as IconBarangActive } from '../Assets/Images/barang-active.svg';
import { ReactComponent as IconInvoiceActive } from '../Assets/Images/invoice-active.svg';

import {AuthContextInitialization} from '../Context/AuthContext'

import Logo from '../Assets/Images/Logo.png'

const Sidebar = () => {
    const authContext = useContext(AuthContextInitialization)
    const location = useLocation()
    const history = useHistory()
    const currentPath = location.pathname.split('/')[1]

    const logout = () => {
        authContext.setIsLoggedIn(false)
        
        setTimeout(() => {
            history.push('/')
        },1000)
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__navigation">
                <div  className="sidebar__navigation__title">
                    <img alt="logo" src={Logo}/>
                    <h3>Inventory</h3>
                </div>

                <nav className="sidebar__navigation__menu">
                    <NavLink
                    className="sidebar__navigation__menu__link"
                    exact
                    to="/"
                    activeClassName="--selected"
                    >
                        <div>
                            {currentPath === "" ? <IconOverviewActive /> : <IconOverview/>}
                        </div>
                        <span>Overview</span>
                    </NavLink>
                    <NavLink
                    className="sidebar__navigation__menu__link"
                    exact
                    to="/barang"
                    activeClassName="--selected"
                    isActive={(match, location) => {
                        if (location.pathname.includes('barang')) return true
                    }}
                    >   
                        <div>
                            {currentPath === "barang" ? <IconBarangActive /> : <IconBarang/>}
                        </div>
                        <span>Barang</span>
                    </NavLink>
                    <NavLink
                    className="sidebar__navigation__menu__link"
                    exact
                    to="/invoice"
                    activeClassName="--selected"
                    isActive={(match, location) => {
                        if (location.pathname.includes('invoice')) return true
                    }}
                    >
                        <div>
                            {currentPath === "invoice" ? <IconInvoiceActive /> : <IconInvoice/>}
                        </div>
                        <span>Invoices</span>
                    </NavLink>
                </nav>
            </div>
            
            <div className="sidebar__logout" onClick={() => logout()}>
                <div><IconSetting/></div>
                <span>Logout</span>
            </div>
        </aside>
    )
}

export default Sidebar