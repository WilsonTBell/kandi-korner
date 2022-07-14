import { Outlet, Route, Routes } from "react-router-dom"
import { Toadsuck } from "../locations/Toadsuck";
import { HotCoffee } from "../locations/HotCoffee";
import { Nutbush } from "../locations/Nutbush";
import { AllLocations } from "../locations/AllLocations";
import { AllProducts } from "../products/AllProducts";
import { ProductForm } from "../products/ProductForm";


export const ApplicationViews = () => {
	return <>
		<Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Sugar, for when the other drugs just aren't cutting it.</div>

                    <Outlet />
                </>
            }>

                <Route path="toadsuck" element={ <Toadsuck /> } />

				<Route path="hotcoffee" element={ <HotCoffee /> } />

				<Route path="nutbush" element={ <Nutbush /> } />

                <Route path="locations" element={ <AllLocations/> } />

                <Route path="products" element={ <AllProducts/> } />

                <Route path="products/create" element={ <ProductForm /> } />
            </Route>
        </Routes>
	</>
}

