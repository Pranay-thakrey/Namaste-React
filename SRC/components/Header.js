import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link></li>
          <li> 
            <Link to={"/about"}>about us</Link></li>
          <li><Link to={"/Contact"}>contact us</Link></li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact=== 'Login' ? 
              setBtnNameReact("Logout") : setBtnNameReact ('Login');
              console.log(btnNameReact)
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
