import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

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
           { 
           kandyUserObject.staff?
           <li className="navbar__item active">
                <Link className="navbar__link" to="/products">All Products</Link>
            </li> : <></>
            }
           
            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
        
     )
}

