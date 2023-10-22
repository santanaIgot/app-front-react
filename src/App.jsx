import Home from "./routes/Home"
import { Outlet } from "react-router-dom"
import Cabecalho from "./components/Cabecalho"
export default function App (){
  return(
    <>
      <div>
        <Cabecalho/>
        <Outlet/>
      </div>

    </>
  )
}