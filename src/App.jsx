import Home from "./routes/Home"
import { Outlet } from "react-router-dom"
export default function App (){
  return(
    <>
      <div>
        <h1>Ola mundo</h1>
        <Outlet/>
      </div>

    </>
  )
}