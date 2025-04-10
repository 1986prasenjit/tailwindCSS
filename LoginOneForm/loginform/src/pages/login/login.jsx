import Button from "../../components/Button/Button.jsx";
import Input from  "../../components/Input/Input.jsx";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <form className="w-full max-w-lg border border-black/60 my-4 p-8 bg-white mx-auto">
      <h1 className=" text-2xl sm:text-4xl font-semibold mb-3">Get Started</h1>
      <h2 className="text-[12px] sm:text-xl text-gray-800 font-medium mb-1">
        Already have an account?
      </h2>
      <h2 className="text-[14px] sm:text-xl text-gray-800 font-medium mb-1">
        <a href="#" className="text-[#f17777] text-base font-bold">
          Log In
        </a>
      </h2>
      
      {/* Social Buttons */}
      <div className="w-full flex gap-5 my-2 relative">
        <Button
          name="sign up"
          icon="fa-brands fa-google"
          extraClasses="w-full p-1 sm:p-2 text-[15px] sm:text-xl rounded-md font-light tracking-wide cursor-pointer mt-2 shadow-sm transition-colors flex items-center justify-center text-black border-2 border-gray-400/50 bg-transparent"
        />
        <Button
          name="sign up"
          icon="fab fa-facebook"
          extraClasses="w-full p-1 sm:p-2 text-[15px] sm:text-xl rounded-md font-light tracking-wide cursor-pointer mt-2 shadow-sm transition-colors flex items-center justify-center text-white bg-blue-600 hover:bg-[#5174db]"
        />
      </div>

      <div className="text-center text-lg sm:text-[28px] font-light my-2 sm:my-4">Or</div>

      {/* Input Fields */}
      <Input
        id="name"
        label="Name"
        type="text"
        placeHolder="Joy Shahed"
        icon="far fa-user"
      />
      <Input
        id="email"
        label="Email"
        type="email"
        placeHolder="abc@gmail.com"
        icon="far fa-envelope"
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeHolder="Password"
        icon="fas fa-lock outline-lock"
      />

      <Button
        name="Submit"
        extraClasses="w-full p-1 sm:p-2 text-lg sm:text-xl rounded-md font-light tracking-wide cursor-pointer mt-8 shadow-sm transition-colors flex items-center justify-center text-white bg-[#e47369f1] h-[40px] hover:bg-[#eb4a3ccb]"
      />
    </form>
  );
};

export default Login;
