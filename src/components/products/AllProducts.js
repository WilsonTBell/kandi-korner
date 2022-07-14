import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Products.css"

export const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [expensive, updateExpensive] = useState(false)
    const navigate = useNavigate()

    useEffect(
        () => {
            if(expensive) {
            const expensiveProductArray = products.filter(product => {
                return product.price > 4
            })
            setFiltered(expensiveProductArray)
        
        }
        else {
            setFiltered(products)
        }
        },
        [expensive]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=type&_sort=name`)
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
                setFiltered(productArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    

return (
    <>
    <h2>All of Our Products</h2>

    <button onClick={() => updateExpensive(true)}>Expensive Only</button>  
    <button onClick={() => updateExpensive(false)}>Show All</button>
    <button onClick={() => navigate("/products/create")}>Create Ticket</button>

    <article className="products">
    {filteredProducts.map(
        (product) => { 
                return <section className="product" key={`product--${product.id}`}>
                    <header>{product.name}</header>
                    <div>${product.price}</div>
                    <footer>Type: {product.type.name}</footer>
                </section>
            }
        )
    }
</article>
</>
)
}