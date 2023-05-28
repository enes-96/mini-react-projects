import React, { useState, useEffect } from "react";
import { SiReact } from "react-icons/si";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleMobileScreen() {
      setMobileScreen(window.innerWidth >= 768);
    }

    handleMobileScreen();

    window.addEventListener("resize", handleMobileScreen);

    return () => {
      window.removeEventListener("resize", handleMobileScreen);
    };
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/" },
    { label: "Products", path: "/" },
    { label: "Contact Us", path: "/" },
  ];

  const toggleMenu = () => {
    setOpenMenu(true);
  };

  return (
    <div>
      <header className="w-full bg-sky-500 flex items-center justify-between p-4 text-white">
        <SiReact className="text-4xl text-sky-900" />
        {mobileScreen ? (
          <nav>
            {openMenu ? (
              <ul className="flex gap-1 text-xl items-center cursor-pointer">
                {navItems.map((item, index) => (
                  <li key={index} className="py-1 px-7">
                    {item.label}
                  </li>
                ))}
                <li className="bg-sky-800 py-1 px-7 rounded-md">Sign Up</li>
              </ul>
            ) : (
              <button>click</button>
            )}
          </nav>
        ) : (
          <nav>
            <HiOutlineMenu className="text-3xl cursor-pointer" />
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
