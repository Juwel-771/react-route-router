import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <h1>About Shop </h1>
            <h4>Shop List</h4>
            <div className='flex justify-evenly'>
                <div className='bg-blue-300 p-3'>
                    <ul className='text-gray-900'>
                        <Link to = "/shop/grocery"><li>Grocery Shop</li></Link>
                        <Link to = "/shop/laundry"><li>Laundry Shop</li></Link>
                        <Link to = "/shop/super"><li>Super Shop</li></Link>
                        <Link to = "/shop/meat"><li>Meat Shop</li></Link>
                    </ul>
                </div>
                <div className='bg-red-400'>
                    <h2><Outlet></Outlet></h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;