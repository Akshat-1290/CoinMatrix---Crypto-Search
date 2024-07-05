

export const Hero = () => {
  return (
    <>
  <section id="hero" className="bg-gradient-home pt-40">
    <div className="hero-container font-space font-bold text-white flex flex-col gap-6 items-center px-4">
        <h1 className="text-center text-5xl uppercase leading-tight">
            <span className="text-slate-100">Track And Trade</span>
            <br />
            <span className="bg-gradient-purple bg-clip-text text-transparent">Crypto Currencies</span>
        </h1>
    <button className="scroll-btn bg-gradient-purple w-2/3 h-14 rounded-full text-xl flex justify-center items-center gap-3">See Prices <i className="fa-solid fa-angle-down"></i></button>
    </div>
  </section>
    </>
  )
}
