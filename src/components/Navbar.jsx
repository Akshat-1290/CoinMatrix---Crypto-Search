import { useRef, useState , useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null)

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

  const scrollAnimation = () => {
    const nav = navRef.current;
    if (nav) {
      if (window.scrollY >= 150) {
        nav.classList.add("!fixed", "bg-[#0f051d]");
      } else {
        nav.classList.remove("!fixed", "bg-[#0f051d]");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  return (
    <>
      <nav className="text-white font-space flex justify-between p-5 xl:py-10 xl:px-24 absolute w-screen top-0 right-0 z-20" ref={navRef}>
        <Link to={"/"} className="title text-3xl uppercase font-bold cursor-pointer">CoinMatrix</Link>
        <ul className="desktop-menu hidden md:flex gap-5">
          {menuLink.map((item) => {
            return (
              <li className="text-xl font-bold hover-gradient" key={item.link}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="desktop-nav-icons hidden md:block text-2xl space-x-4 ml-16">
          <i className="fa-brands fa-twitter cursor-pointer hover-gradient"></i>
          <i className="fa-brands fa-discord cursor-pointer hover-gradient"></i>
        </div>
        <ul
          className={`mobile-menu bg-white text-black w-screen absolute top-0 ${
            menuOpen ? "right-0" : "right-full"
          }  h-screen flex flex-col justify-center items-center gap-6 z-30 transition-all ease-in-out duration-500 md:hidden`}
        >
          {menuLink.map((item) => {
            return (
              <li className="text-3xl font-bold" key={item.link}>
                <Link to={item.link}>{item.text}</Link>
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
        <div className="ham-menu text-3xl md:hidden" onClick={handleMenu}>
          <i className="fa-solid fa-bars-staggered hamburger-menu hover-gradient transition-all"></i>
        </div>
      </nav>
    </>
  );
};
