import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const [method, setMethod] = useState('cashOnDelivery');
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 border-t sm:pt-14 min-h-[80vh]">
      {/* -------------- left side ------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email"
        />
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Index"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
        />
      </div>
      {/* -------- Right side ---------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
          <div className="mt-12">
            <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* ------------- payment method selection -------------- */}
            <div className="flex gap-3 flex-col lg:flex-row">
                <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-300">
                    <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method==='stripe'? 'bg-green-400': ''}`}></p>
                    <img src={assets.stripe_logo} className="h-5 mx-4"/>
                </div>
                <div onClick={()=>setMethod('rezorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-300">
                    <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method==='rezorpay'? 'bg-green-400': ''}`}></p>
                    <img src={assets.razorpay_logo} className="h-5 mx-4"/>
                </div>
                <div onClick={()=>setMethod('cashOnDelivery')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-300">
                    <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method==='cashOnDelivery'? 'bg-green-400': ''}`}></p>
                    <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                </div>
            </div>
            {/* btn link to order page */}
            <div className="w-full text-end mt-8">
              <button onClick={()=>navigate('/order')} className="px-16 text-white bg-black py-3 text-sm">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
