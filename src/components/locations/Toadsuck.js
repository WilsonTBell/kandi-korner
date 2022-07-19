import { useEffect, useState } from "react"
import "./Locations.css"

export const Toadsuck = () => {
    const [locationInventories, setLocationInventories] = useState([])
    // const [filteredProducts, setFiltered] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locationInventory?_expand=product&locationId=1`)
            .then(response => response.json())
            .then((inventoryArray) => {
                setLocationInventories(inventoryArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )



return (
    <>
    <h2>Toadsuck Turtle Tavern Products</h2>
    <article className="products">
    {locationInventories.map(
        (locationInventory) => { if(locationInventory.quantity > 0)
                return <section className="product" key={`toadsuckProduct--${locationInventory.product.id}`}>
                    <header>{locationInventory.product.name}</header>
                    <div>{locationInventory.product.price}</div>
                    <footer>Quantity: {locationInventory.quantity}</footer>
                </section>
            }
        )
    }
</article>
</>
)
}