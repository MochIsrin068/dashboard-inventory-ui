import ImageSearch from '../Assets/Images/search.png'
import ImageSetting from '../Assets/Images/setting.png'
import ImageNotif from '../Assets/Images/notif.png'
import ImageUser from '../Assets/Images/user.png'
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const currentTitle = location.pathname.split('/')[1]
    return (
        <div className="header">
            <div className="header__title">{currentTitle === "" ? "Overview" : currentTitle}</div>   
            <div className="header__account">
                <img src={ImageSearch} alt="search" />
                <img src={ImageSetting} alt="setting" />
                <img src={ImageNotif} alt="notif" />
                <img src={ImageUser} alt="user" />
            </div>
        </div>
    )
}

export default Header