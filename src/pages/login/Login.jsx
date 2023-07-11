import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
export default function Login() {


    const {login} = useContext(AuthContext);


const handleLogin = () => {
login();
}
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam fugit consectetur </p>
                    <span>Don`t have an account?</span>
                    <Link to="/register">
                    <button>Sign Up</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>login</h1>
                    <form >
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                       
                        <button onClick={handleLogin}>Login</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}


