import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNavBar = () => {
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
                <Link className="navbar__link" to="/toadsuck">Toadsuck Turtle Tavern</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/hotcoffee">Hot Coffee Coffee Cave</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/nutbush">Nutbush Nougat</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/productSearch">Product Search</Link>
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
