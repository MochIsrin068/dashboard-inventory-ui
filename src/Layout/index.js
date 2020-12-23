import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <div className="layout__sidebarContainer">
                <Sidebar />
            </div>
            <div className="layout__contentContainer">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout