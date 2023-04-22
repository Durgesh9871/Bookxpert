import React from 'react';
import  MainNavbar  from './Header/Navbar';
import AllRoutes from './Routes/AllRoutes';
import {Footer} from "./Footer/Footer"




function App() {

  return (
    <div>
       <MainNavbar />
       <AllRoutes />
       <Footer />
    </div>
  );
}

export default App;
