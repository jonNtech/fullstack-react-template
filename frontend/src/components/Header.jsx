import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../features/auth/authSlice";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <button className="btn">
            <FaSignOutAlt /> Logout
          </button>
        </li>

        <>
          <li>
            <Link to="/profile">
              <FaSignInAlt /> Profile
            </Link>
          </li>
          <li>
            <Link to="/Feed">
              <FaUser /> Feed
            </Link>
          </li>
        </>
      </ul>
    </header>
  );
}
export default Header;
