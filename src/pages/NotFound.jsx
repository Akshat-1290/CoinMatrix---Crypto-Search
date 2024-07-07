import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <section className="bg-gradient-purple text-slate-100 h-screen flex flex-col justify-center ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl  ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl ">
              Somethings missing.
            </p>
            <div className="mb-4 text-lg font-space">
             <p>Two Reasons You Are Here.</p>
             <ul className="mt-3 space-y-4">
             <li>API Can Only Take Limited Requests. So, Wait About a Minute.</li>
             <li>Data You Are Looking For Is Not Available.</li>
             </ul>
            </div>
            <Link
              to={"/"}
              className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
