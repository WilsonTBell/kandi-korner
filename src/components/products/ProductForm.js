import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    const [types, setTypes] = useState ([])
    const [product, update] = useState({
        name: "",
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the product list
    */
        useEffect(
            () => {
                fetch(`http://localhost:8088/types`)
                .then(response => response.json())
                .then((typeArray) => {
                    setTypes(typeArray)
                })
            },
            [] // When this array is empty, you are observing initial component state
        )

    const navigate = useNavigate()
    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
       
        const productToSendToAPI = {
            name: product.name,
            typeId: parseFloat(product.typeId),
            price: product.price 
        }

      

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
               navigate("/products")
            })
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Kandy Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Kandy Name"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <Dropdown
                    label="Kandy Type"
                    options={types}
                    onChange={ (evt) => {
                        const copy = {...product}
                        copy.typeId = parseInt(evt.target.value)
                        update(copy)
                    }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Price:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Kandy Price"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = parseFloat(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) =>  handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Kandy
            </button>
        </form>
    )
}

const Dropdown = ({ label, options, onChange }) => {
    return (
      <label>
        {label}
        <select  onChange={(evt) => onChange(evt)}>
            <option value={0}>Kandy Type</option>
          {options.map((option) => (
            <option value={option.id}>{option.name}</option>
          ))}
        </select>
      </label>
    );
  };