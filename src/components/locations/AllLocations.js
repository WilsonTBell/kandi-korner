import { useEffect, useState } from "react"
import "./Locations.css"

export const AllLocations = () => {
    const [locations, setLocations] = useState([])


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

    


return (
    <>
    <h2>Where To Find Us</h2>
    <article className="products">
    {locations.map(
        (location) => { 
                return <section className="product" key={`location--${location.id}`}>
                    <header>{location.name}</header>
                    <div>{location.address}</div>
                    <footer>Size: {location.squareFeet} sq. ft</footer>
                </section>
            }
        )
    }
</article>
</>
)
}