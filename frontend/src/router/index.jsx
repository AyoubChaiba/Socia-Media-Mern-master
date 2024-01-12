import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/layout';
import {Home , Login  ,Register} from "../pages/index"
import EditProfilePage from '../pages/profile/EditProfilePage';


export let Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },{
                path: '/*' ,
                element : 'not found this page'
            },
            {
                path: '/login',
                element : <Login />
            },
            {
                path: '/register',
                element : <Register />
            },
            {
                path: '/edit/:id',
                element: <Home edit={true} />
            },
            {
                path: '/EditProfile',
                element: <EditProfilePage />
            }
        ]
    }
]);