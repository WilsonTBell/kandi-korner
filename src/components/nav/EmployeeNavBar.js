import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const EmployeeNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
              <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Where To Find Us</Link>
            </li>
         
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">All Products</Link>
            </li> 

            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">All Customers</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">All Employees</Link>
            </li>
            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
        
     )
}