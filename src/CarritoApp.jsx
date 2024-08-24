import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductProvider } from "./context/ProductProvider"
import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from "./pages/CartPage"
import { CartProvider } from "./context/CartProvider"


export const CarritoApp = () => {
      return (
            <ProductProvider>
                  <CartProvider>
                        <NavBarComponent />
                        <div className="container">
                              <Routes>
                                    <Route path='/*' element={<Navigate to='/' />}></Route>
                                    <Route path='/' element={<ProductsPage />}></Route>
                                    <Route path='/carrito' element={<CartPage />}></Route>
                              </Routes>
                        </div>
                  </CartProvider>
            </ProductProvider>
      )
}
