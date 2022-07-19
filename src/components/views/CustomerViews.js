import { Outlet, Route, Routes } from "react-router-dom"
import { Toadsuck } from "../locations/Toadsuck";
import { HotCoffee } from "../locations/HotCoffee";
import { Nutbush } from "../locations/Nutbush";
import { AllLocations } from "../locations/AllLocations";
import { ProductSearch } from "../products/ProductSearch";

export const CustomerViews = () => {
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

                <Route path="productSearch" element={ <ProductSearch/> } />

            </Route>
        </Routes>
	</>
}
