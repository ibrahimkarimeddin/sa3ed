import { Navigate, Outlet } from "react-router-dom"

   export const PrivateRoutes = ()=>{
    let user= {isAuth:true}
    return user.isAuth ? <Outlet /> : <Navigate to={"/login"} />
   }
  