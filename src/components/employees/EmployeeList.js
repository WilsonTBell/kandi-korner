import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()


    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user&_expand=location&_sort=name`)
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    

return (
    <>
    <h2>Our Team</h2>


    <button onClick={() => navigate("/employees/create")}>Add New Employee</button>

    <article className="employees">
    {employees.map(
        (employee) => { 
                return <section className="employee" key={`employee--${employee.id}`}>
                    <header>{employee.user.fullName}</header>
                    <div>{employee.user.email}</div>
                    <footer>Location: {employee.location.name}</footer>
                </section>
            }
        )
    }
</article>
</>
)
}