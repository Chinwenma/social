// import { Link } from "react-router-dom";
// import "./register.scss";
// export default function Regsiter(){
//     return (
//          <div className="register">
//             <div className="card">
//             <div className="left">
//                     <h1>Matrix Social</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam fugit consectetur </p>
//                     <span>Have an account already?</span>
//                     <Link to="/login">
//                     <button>Login</button>
//                     </Link>  
//                 </div>
//                 <div className="right">
//                     <h1>Register</h1>
//                     <form >
//                         <input type="text" placeholder="Username" />
//                         <input type="email" placeholder="Email" />
//                         <input type="password" placeholder="Password" />
//                         <input type="text" placeholder="Name" />
//                         <button>Sign Up</button>
//                     </form>
//                 </div>
                
//             </div>
//         </div>
//     )
// }



import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Socio-Matrix</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;