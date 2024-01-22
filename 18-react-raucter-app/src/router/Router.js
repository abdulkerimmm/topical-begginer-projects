import {useRoutes,Navigate} from "react-router-dom"
import Mainview from "../views/mainview";
import Parametre from "../views/Parametre";
import QuerySearch from "../views/QuerySearch";
import Haberler from './../views/haberler';
import Sporhaberleri from "../views/SporHaberleri";
import EconomyNews from './../views/EconomyNews';
import { userRoutes } from './userRouter';

const Router = () => { 
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <Mainview></Mainview>
            },
            userRoutes,
            {
                path: '/parametre/:id',
                element: <Parametre/>
            },
            {
                path: '/queryparametre/',
                element: <QuerySearch/>
            },
            {
                path: '/haberler/',
                element: <Haberler/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="sporhaberleri" />
                    },
                    {
                        path:'sporhaberleri',
                        element:<Sporhaberleri/>
                    },
                    {
                        path:'ekonomi-haberleri',
                        element:<EconomyNews/>,
                        children:[
                            {
                                path:':id',
                                element:<EconomyNews/>
                            }
                        ]
                    }
                ]
            },


            {
                path: '*',
                element: <div>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router