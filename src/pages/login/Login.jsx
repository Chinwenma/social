import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
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
                       
                        <button>Login</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}