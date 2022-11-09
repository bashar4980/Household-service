import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import ServiceDetails from '../pages/Services/ServiceDetails';
import Services from '../pages/Services/Services';
import Signup from '../pages/Singup/Signup';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                loader:async()=>fetch("http://localhost:5000/services"),
                element:<Home></Home>
            } ,
            {
                path:"/services",
                loader:async()=>fetch("http://localhost:5000/services"),
                element:<Services></Services>
            },
            {
                path:"/services/:id",
                loader:async({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<ServiceDetails></ServiceDetails>
            }
            ,
            {
                path:"/signin",
                element:<Login></Login>
            },
            {
            path:"/signup",
            element:<Signup></Signup>
            }
          
        ]
    }
])

export default router;