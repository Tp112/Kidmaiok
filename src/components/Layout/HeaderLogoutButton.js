import classes from "./HeaderLogoutButton.module.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderLogoutButton = () => {
    const navigate  = useNavigate();
    return (
        <button className={classes.button} onClick={() => navigate('/')}>
            Logout
        </button>
    ) 
};

export default HeaderLogoutButton;