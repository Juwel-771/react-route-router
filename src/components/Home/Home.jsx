import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <h2> This is Home file</h2>
          <Header></Header>
          <Outlet></Outlet>  
        </div>
    );
};

export default Home;