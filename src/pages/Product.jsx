import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [sizes, setSizes] = useState("");

  const fetchPRoductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchPRoductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((e, i) => (
              <img
                onClick={() => setImage(e)}
                src={e}
                key={i}
                className="w-[24px] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          {/* first image is show seperate and big size */}
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2x1 mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_dull_icon} className="w-3 5" />
            <p className="pl-2">(130)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((e, i) => (
                <button
                  onClick={() => setSizes(e)}
                  className={`border py-2 px-2 bg-gray-50 ${
                    e === sizes ? "border-amber-500" : ""
                  }`}
                  key={i}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, sizes)}
          className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original prodict</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/*------------ description and review section  ------------ */}
      <div className="mt-20">
        <div className="flex">
          <b className="border text-sm px-5 py-3">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (130)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            non sunt aut magni ullam amet porro dignissimos, provident eius
            dolorum consequuntur quibusdam voluptatem saepe vitae ea pariatur
            possimus totam eos itaque a. Dolore incidunt impedit animi nam
            recusandae, officiis possimus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            doloremque totam odio repellat. Veniam, porro.
          </p>
        </div>
      </div>
      {/* ----------- display related products ----------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
