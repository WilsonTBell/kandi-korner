import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])
    const [newUser, update] = useState({
        fullName: "",
        email: "",
        locationId: 0,
        payRate:"",
        startDate: "",
        isStaff: true
    })
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
       
        const userToSendToAPI = {
            fullName: newUser.fullName,
            email: newUser.email,
            isStaff: true 
        }

        const employeeToSendToAPI = {
            locationId: newUser.locationId,
            startDate: newUser.startDate,
            payRate: newUser.payRate
        }

      

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToSendToAPI)
        })
            .then(response => response.json())
            .then((postedUser) => {
                employeeToSendToAPI.userId = postedUser.id
                return fetch(`http://localhost:8088/employees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(employeeToSendToAPI)
                })
            })
            .then(() => {
                navigate("/employees")
            })
    }

    return (
            <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                        value={newUser.fullName}
                        onChange={
                            (evt) => {
                                const copy = {...newUser}
                                copy.fullName = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Email"
                        value={newUser.email}
                        onChange={
                            (evt) => {
                                const copy = {...newUser}
                                copy.email = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <Dropdown
                    label="Location"
                    options={locations}
                    onChange={ (evt) => {
                        const copy = {...newUser}
                        copy.locationId = parseInt(evt.target.value)
                        update(copy)
                    }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Start Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Employee Start Date"
                        value={newUser.startDate}
                        onChange={
                            (evt) => {
                                const copy = {...newUser}
                                copy.startDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Pay Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Pay Rate"
                        value={newUser.payRate}
                        onChange={
                            (evt) => {
                                const copy = {...newUser}
                                copy.payRate =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) =>  handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Employee
            </button>
            </form>
    )
}

const Dropdown = ({ label, options, onChange }) => {
    return (
      <label>
        {label}
        <select  onChange={(evt) => onChange(evt)}>
            <option value={0}>Location</option>
          {options.map((option) => (
            <option value={option.id}>{option.name}</option>
          ))}
        </select>
      </label>
    );
  };