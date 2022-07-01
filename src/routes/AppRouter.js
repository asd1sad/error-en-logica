
import { BrowserRouter } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
 


export const AppRouter = () => {

    const {auth} = useAuthContext()

    // console.log(auth)

    return(
        <BrowserRouter>
        {
            auth.loggedIn 
            ? <PrivateRoutes/>
            : <PublicRoutes/>
        }
        </BrowserRouter>
    )
}