import { assets } from '../assets/frontend_assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
<Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
<img className='w-full md:max-w-[480px]' src={assets.contact_img}/>
<div className='flex flex-col justify-center items-center gap-6'>
<p className='font-semibold text-xl text-gray-600'>Our Store</p>
<p className='text-gray-500'>116238 Nagatinsky Station <br />apartament 228, Moscow, Russian Federation </p>
<p className='text-gray-500'>Tel.number: +8 (999)-888-77 60 <br />Email: contact@gettouchour@gmail.com</p>
<p className='font-semibold text-xl text-gray-600'>Works on Forever company</p>
<p className='text-gray-500'>Learn more about our Teams and Job opening.</p>
<button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
</div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default Contact