import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="md:bg-footer pb-10 bg-center bg-cover md:h-64 lg:h-[22rem] ">
        <div className="flex flex-col items-center text-slate-100">
          <div className="text-4xl flex gap-8">
            <Link to={"https://github.com/Akshat-1290"} target="_blank" className="fa-brands fa-github hover-gradient cursor-pointer "></Link>
            <Link to={""} className="fa-brands fa-linkedin hover-gradient cursor-pointer "></Link>
            <Link to={""} className="fa-brands fa-whatsapp hover-gradient cursor-pointer "></Link>
            <Link to={""} className="fa-brands fa-youtube hover-gradient cursor-pointer "></Link>
          </div>
          <div className="flex gap-8 font-space text-xl mt-10">
            <p className="hover-gradient cursor-pointer ">Privacy</p>
            <p className="hover-gradient cursor-pointer ">Terms Of Use</p>
          </div>
          <p className="text-xl mt-5 cursor-pointer hover-gradient font-space">
            &copy; Akshat Sharma
          </p>
        </div>
      </footer>
    </>
  );
};
