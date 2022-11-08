import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                loader:async()=>fetch("http://localhost:5000/services"),
                element:<Home></Home>
            }
          
        ]
    }
])

export default router;