import { useEffect, useState } from "react"
import "./Products.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ProductSearch = () => {
    const [searchTerms, setSearchTerms] = useState()
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?&_sort=name`)
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            const searchedProducts = products.filter(product =>{ 
                return product.name.toLowerCase().startsWith(searchTerms.toLowerCase())
            })  
            setFiltered(searchedProducts)
        },  
        [searchTerms]
    )

    return <>  
    <div className="searchBar">
    <div>What candy are you looking for?</div>
    <input
        onChange={
            (changeEvent) => {
            setSearchTerms(changeEvent.target.value)
        }
    }
     type="text" placeholder="Search" />
</div>
    <article className="products">
    
    {filteredProducts.map(
        (product) => {
            if(searchTerms !== "") {
                return <section className="product" key={`product--${product.id}`}>
                    <header>{product.name}</header>
                    <div>${product.price}</div>
                    <button  onClick={toggle}>Show Me Where</button>
                </section>
            }
            }
        )
    }
        <div>
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Locations With your Candy</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
</article>
</>
}