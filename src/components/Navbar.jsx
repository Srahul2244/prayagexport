import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assest/Logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [mouse, toggoleMouse] = useState(false);
  const [scroll, setScroll] = useState(false);
  const setSticky = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", setSticky);
  const toggle = () => {
    toggoleMouse(!mouse);
  };

  return (
    <section>
      {scroll ? (
        <AnimatePresence>
          <motion.div
            key="full-menu"
            initial={{ opacity: 1, position: "fixed", top: 30 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="w-[100%] bg-[#edc25d] py-2 mx-auto z-50 rounded-md"
          >
            <div className="button flex flex-col items-center gap-1 full-menu">
              <div className="first h-[2px] w-5 bg-white"></div>
              <div className="first h-[2px] w-5 bg-white"></div>
              <div className="first h-[2px] w-5 bg-white"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div className="nav w-[90%] mx-auto list-menu">
            <div class="navbar bg-[#f4e66e] relative z-20 navigation mx-auto rounded-md">
              <div class="flex-1">
                <Link to="/" class="normal-case text-xl">
                  <img className="w-28" src={logo} alt="" />
                </Link>
              </div>
              <div class="flex-none">
                <ul class="flex mr-2">
                  <li onMouseEnter={toggle} onMouseLeave={toggle}>
                    <a
                      className="parent-class px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a className="parent-class px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white">
                      Recipes
                    </a>
                    <a className="parent-class px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white">
                      Golden Grows Here
                    </a>
                    <a className="parent-class px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white">
                      Where to Buy
                    </a>
                    <a className="parent-class px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white">
                      ES
                    </a>
                    <a className="parent-class px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white">
                      Search
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Navbar;
