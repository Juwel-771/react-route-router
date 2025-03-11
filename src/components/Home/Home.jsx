import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {

  const navigation = useNavigation(); 

    return (
        <div>
          <p>My website</p>
          <Header></Header>
          {
            navigation.state === "loading" ? <p> Lading </p> : <Outlet></Outlet>
          }
          
          <Footer></Footer>
        </div>
    );
};

export default Home;