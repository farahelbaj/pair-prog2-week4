import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    );
};
  
export default Layout;