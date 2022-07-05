import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Home from '../Home/Home';



function ProtectedRoute(props) {
    const auth =  !!localStorage.getItem("userToken");
    if(!auth){
      console.loglog("Hello World");
       return <> <Route path="/login" element={<Home />} /></>;
    }
  return (
    <>
       <Route {...props} />
    </>
  );
}

export default ProtectedRoute