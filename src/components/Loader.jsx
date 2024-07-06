import LoaderGif from "../assets/Loader.gif"
export const Loader = () => {
  return (
   <>
   <div className="loader w-full flex justify-center">
   <img src={LoaderGif} className="h-44" alt="Loader" />
   </div>
   </>
  )
}
