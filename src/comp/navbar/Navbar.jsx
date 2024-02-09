import React from "react";
import { Flex } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <Flex justify="space-between">
        <div className="text-white font-bold">Auto Resume</div>
        <div className="h-4 relative">
          <Link
            to='/signin'
            class="relative inline-flex items-center justify-start px-6 py-0 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group h-10"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
             SignIn | SignUp
            </span>
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
