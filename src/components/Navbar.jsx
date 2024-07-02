import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLink = [
    { text: "Home", link: "#home" },
    { text: "Market", link: "#market" },
    { text: "Choose Us", link: "#choose-us" },
    { text: "Join", link: "#join" },
  ];

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <nav className="text-white font-space flex justify-between p-5 fixed w-screen top-0">
        <p className="title text-3xl uppercase font-bold">CoinMatrix</p>
        <ul
          className={`mobile-menu bg-white text-black w-screen absolute top-0 ${
            menuOpen ? "right-0" : "right-full"
          }  h-screen flex flex-col justify-center items-center gap-6 z-30 transition-all ease-in-out duration-500`}
        >
          {menuLink.map((item) => {
            return (
              <li className="text-3xl font-bold" key={item.link}>
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
          <div
            className="close-menu absolute top-5 right-5 text-3xl text-black"
            onClick={handleMenu}
          >
            <i className="fa-solid fa-xmark close-menu hover-gradient transition-all"></i>
          </div>
        </ul>
        <div className="ham-menu text-3xl" onClick={handleMenu}>
          <i className="fa-solid fa-bars-staggered hamburger-menu hover-gradient transition-all"></i>
        </div>
      </nav>
    </>
  );
};
