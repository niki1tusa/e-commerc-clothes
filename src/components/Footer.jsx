import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolore quasi adipisci accusamus in. Tenetur adipisci, tempore esse a
            iure aut voluptas, voluptatem iusto neque quae odio repudiandae
            aliquid rem.
          </p>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About</li>
              <li>Deliviry</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+7-999-888-77-66</li>
                <li>contact@gettouchour.com</li>
            </ul>
          </div>
          </div>
        <div>
            <hr className="text-gray-400"/>
            <p className="PY-5 text-sm text-center text-gray-400">Copyright 2024@ forever.com - All Right Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
