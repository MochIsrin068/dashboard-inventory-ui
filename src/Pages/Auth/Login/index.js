import {useContext, useEffect, useState} from 'react'
import BG from '../../../Assets/Images/BG.png'
import Logo from '../../../Assets/Images/Logo-large.png'
import {ReactComponent as IconUser} from '../../../Assets/Images/user.svg' 
import {ReactComponent as IconLock} from '../../../Assets/Images/lock.svg' 
import {AuthContextInitialization} from '../../../Context/AuthContext'

const Login = ({history}) => {

    const [isSubmiting, setIsSubmiting] = useState(false)

    const authContext = useContext(AuthContextInitialization)
    
    const submit = (event) => {
        event.preventDefault()

        setIsSubmiting(true)
        authContext.setIsLoggedIn(true)
        
        setTimeout(() => {
            setIsSubmiting(false)
            history.push('/')
        },3000)

    }

    return (
        <div className="login">
            <img src={BG} alt=""/>
            <div className="login__content">
                <img src={Logo} alt=""/>
                <label>INVENTORY</label>
                <form onSubmit={submit}>
                    <div>
                        <IconUser/>
                        <input type="text" placeholder="USERNAME" />
                    </div>
                    <div>
                        <IconLock/>
                        <input type="password" placeholder="PASSWORD" />
                    </div>
                    <button type="submit">{isSubmiting ? "LOADING..." : "LOGIN"}</button>
                    <p>Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}

export default Login