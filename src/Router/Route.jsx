import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services';

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
            }
          
        ]
    }
])

export default router;