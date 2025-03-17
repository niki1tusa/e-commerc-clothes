import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"


const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])
    useEffect(()=>{
        if(products.length > 0) {
let productCopy = products.slice()
productCopy = productCopy.filter(e=>category === e.category)
productCopy = productCopy.filter(e=>subCategory === e.subCategory)
setRelated(productCopy.slice(0,5));

        }
    },[products])
  return (
    <div className="m-24">
        <div className="text-center text-3xl py-2">
            <Title text1={"RELATED"} text2={'PRODUCTS'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {related.map((e,i)=>(
<ProductItem id={e._id} key={i} name={e.name} image={e.image} price={e.price}/>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts