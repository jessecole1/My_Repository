import React, { useEffect } from 'react';
import image from '../img/judepic.jpg'
import { useMyContext } from './MyProvider';
import Cookies from 'js-cookie';

const Front = () => {

    const {adminLoggedIn, setAdminLoggedIn, admin, setAdmin} = useMyContext();

    return (
        <div class="">
            {
                adminLoggedIn ? (
                    <h3>Hey, {admin.firstName}!</h3>
                ) : (
                    <h3>Not Logged In no!</h3>
                )
            }
            <div class="relative">
                <h1 class="absolute text-right w-4/5 mt-64 text-8xl text-white">Jude Cole</h1>
                <img class="m-auto" src={image} />
            </div>
            <div class="relative m-auto ml-24">
                
            </div>
        </div>
    );
};

export default Front;
