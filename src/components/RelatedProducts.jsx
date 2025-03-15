import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"


const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])
    useEffect(()=>{
        if(products.length > 0) {
let productCopy = products.slice()
productCopy = productCopy.filter(e=>category === e.category)
productCopy = productCopy.filter(e=>subCategory === e.subCategory)
console.log(productCopy.slice(0,5));

        }
    },[products])
  return (
    <div>
        
    </div>
  )
}

export default RelatedProducts