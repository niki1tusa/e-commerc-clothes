import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext = createContext()

const ShopContextProvider = (props) => {
const currency = '$'
const deliveryCost = 5
const [search, setSearch] = useState('');
const [showSearch, setShowSearch] = useState(true)
    const value = { products, currency, deliveryCost, search, setSearch, showSearch, setShowSearch}

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider