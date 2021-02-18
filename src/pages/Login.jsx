import { AiFillGooglePlusCircle, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="backgroundcolors">
      <FiShoppingCart className="cartlogin" />
      <div className="loginbackground">
        <label>Login</label>
        <div className="logincontaint">
          <h5>Username</h5>
          <input type="text" placeholder="Enter User Name" />
          <h5>Password</h5>
          <input type="text" placeholder="Enter User Password" />
        </div>
        <div className="loginbottom">
          <button>Login</button>
        </div>
        <div className="loginicon">
          <a>Forgot Password</a>
          <br></br>
          <Link style={{ textDecoration: "none" }} to="/register">
            OR sign up
          </Link>
          <div style={{ fontSize: "50px" }}>
            <h6>OR Sign Up Using</h6>
            <FaFacebook
              style={{
                color: "rgb(59,89,152)",
                cursor: "pointer",
                margin: "0 2px",
              }}
            />
            <AiFillTwitterCircle
              style={{ color: "rgb(29,161,242)", cursor: "pointer" }}
            />
            <AiFillGooglePlusCircle
              style={{
                color: "rgb(234,67,53)",
                cursor: "pointer",
                margin: "0 2px",
              }}
            />
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Login;
