import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import AddService from '../pages/AddService/AddService';
import Blogs from '../pages/Blog/Blogs';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import Myreviews from '../pages/My_Reviews/Myreviews';
import ServiceDetails from '../pages/Services/ServiceDetails';
import Services from '../pages/Services/Services';

import Signup from '../pages/Singup/Signup';
import PrivateRoute from './Privateroute';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                loader:async()=>fetch("https://server-bashar4980.vercel.app/services"),
                element:<Home></Home>
            } ,
            {
                path:"/services",
                loader:async()=>fetch("https://server-bashar4980.vercel.app/allservices"),
                element:<Services></Services>
            },
         
            {
                path:"/services/:id",
                loader:async({params})=>fetch(`https://server-bashar4980.vercel.app/services/${params.id}`),
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:"/myreviews",
          
                element:<PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            }
            ,
            {
                path:"/addservice",
          
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            }
            ,
            {
             path:'/blogs',
             element:<Blogs/>
            },
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