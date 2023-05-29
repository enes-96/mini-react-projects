import React, { useState, useEffect } from "react";
import { SiReact } from "react-icons/si";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleMobileScreen() {
      setMobileScreen(window.innerWidth <= 768);
    }

    function handleResize() {
      handleMobileScreen();
      if (mobileScreen && openMenu) {
        setOpenMenu(false);
      }
    }

    handleMobileScreen();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/" },
    { label: "Products", path: "/" },
    { label: "Contact Us", path: "/" },
  ];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <header
        className={`w-full bg-sky-500 items-center justify-between p-4 text-white ${
          openMenu ? "flex-col h-screen " : "flex"
        }`}
      >
        <SiReact
          className={`text-4xl text-sky-900 ${openMenu ? "hidden" : "block"}`}
        />

        {mobileScreen ? (
          <nav className="h-full">
            {openMenu ? (
              <ul className="flex h-full p-4 text-xl items-center cursor-pointer flex-col justify-between">
                <SiReact className="text-4xl text-sky-900" />
                {navItems.map((item, index) => (
                  <li key={index} className="py-1 px-7">
                    {item.label}
                  </li>
                ))}
                <li className="bg-sky-800 py-1 px-7 rounded-md">Sign Up</li>
                <HiOutlineMenu onClick={toggleMenu} className="text-3xl" />
              </ul>
            ) : (
              <HiOutlineMenu onClick={toggleMenu} className="text-3xl" />
            )}
          </nav>
        ) : (
          <ul className="flex gap-1 text-xl items-center cursor-pointer">
            {navItems.map((item, index) => (
              <li key={index} className="py-1 px-7">
                {item.label}
              </li>
            ))}
            <li className="bg-sky-800 py-1 px-7 rounded-md">Sign Up</li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navbar;
