import BG from '../../../Assets/Images/BG.png'
import Logo from '../../../Assets/Images/Logo-large.png'
import {ReactComponent as IconUser} from '../../../Assets/Images/user.svg' 
import {ReactComponent as IconLock} from '../../../Assets/Images/lock.svg' 

const Login = ({history}) => {

    const submit = (event) => {
        event.preventDefault()
        history.push('/')
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
                    <button type="submit">LOGIN</button>
                    <p>Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}

export default Login