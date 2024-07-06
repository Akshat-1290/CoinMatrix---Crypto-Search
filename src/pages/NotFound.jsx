import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate()
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
            <p className="mb-4 text-lg font-light">
              Sorry, we can t find that page. Api Is Limited You can try again later.
            </p>
            <a
              href="#"
              className="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4" onClick={() => navigate("/")}
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
