import React from 'react';
import {Navbar, Button} from "flowbite-react";
import { Link } from 'react-router-dom';
import './Shared.css'
import { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import toast from 'react-hot-toast';


const Header = () => {
  const {logOut , user} = useContext(AuthContext);
  const signOutuser =()=>{
    logOut()
    .then(()=>{
      toast.success("Log out success")
    })
    .catch(error => console.error(error))
  }
    return (
        <Navbar  className=' border-b border-gray-200 dark:border-gray-600'
  fluid={false}
  rounded={true}
>
  <Navbar.Brand >
    
     <h1 className='text-2xl text-bold hover:text-blue-700'>Household</h1>

  </Navbar.Brand>
  <div className="flex md:order-2">
    
  {
      user?.uid ? <><img src={user.photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500 mr-2" title={user.displayName} />
    
      <Button onClick={signOutuser}>
        Logout
      </Button></>
      :
      <>
      <Link to="/signin" className='mx-5 mt-2'>Login </Link>
      <Link to="/signup" className='mt-2'>Register</Link>
      </>
    }
  <Navbar.Toggle />
  
  </div>
  
  <Navbar.Collapse >
    
  <Link  to="/">Home</Link>
    
   <Link to="/services">Services</Link>
   <Link to="/blogs">Blogs</Link>
    
    {
      user?.uid && <>
      <Link to="/myreviews">My Reviews</Link> 
      <Link to="/addservice">Add Service</Link> 
      </>
    
    }

    

  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;