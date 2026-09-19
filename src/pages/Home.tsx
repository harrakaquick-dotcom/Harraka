import { location } from "../Data/Appdata"

const Home = () => {
  return (
    <div>
     Home
    </div>
  )
}

export default Home



const Live = ()=>{
  return (
    <div className="w-fit flex justify-between items-center gap-3 bg-primary-light border border-primary rounded-pill text-xs text-primary-dark px-2 py-1">
       <span className="live-dot" aria-hidden="true" />
       <h2 className="uppercase ">now live in {location}</h2>
    </div>
  )
}