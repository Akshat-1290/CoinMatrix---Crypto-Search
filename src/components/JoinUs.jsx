import { Link } from "react-router-dom";
import {BigText} from "./BigText";

export default function JoinUs() {
  return (
    <>
      <section
        className="joinus flex flex-col items-center my-24 font-space font-semibold"
        id="join"
      >
        <div className=" flex flex-col items-center">
            <div className="relative xl:px-10">
            <BigText text1="Join Us Via" text2="discord" />
            </div>
          <p className="text-slate-100 text-2xl text-center my-4 px-8 md:w-fit">
            Invest and manage all your crypto at one place.
          </p>
          <Link
            to="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-100 m-auto font-space font-bold gap-3 rounded-full justify-center items-center flex w-72 mt-6 h-fit p-4 bg-gradient-purple text-xl"
          >
            Join Via Discord
          </Link>
        </div>
      </section>
    </>
  );
}
