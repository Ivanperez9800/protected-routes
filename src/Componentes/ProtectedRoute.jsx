
import { Navigate,Outlet } from "react-router-dom"

export const ProtectedRoute = ({isAllowed,children,redirectTo="/"}) =>{


    //redirectTo => redireciona a la pagina inicial o a la que se pase por parametro

    if(!isAllowed){
        return <Navigate to={redirectTo}  />
    }


    return children ? children : <Outlet />

}