import { CustomerNavBar } from "./CustomerNavBar"
import { EmployeeNavBar } from "./EmployeeNavBar"
import "./NavBar.css"

export const NavBar = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

     
    if(kandyUserObject.staff) {
        return <EmployeeNavBar/>
    }
    else {
        return <CustomerNavBar/>
    }  
}