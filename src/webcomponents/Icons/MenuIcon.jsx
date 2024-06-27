import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function MenuIcon(){

    return(
        <svg className="text-black max-lg:text-white" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="24.32" y2="0.5" stroke="currentColor"></line>
            <line y1="16.5" x2="24.32" y2="16.5" stroke="currentColor"></line>
            <line y1="8.17999" x2="24.32" y2="8.17999" stroke="currentColor"></line>
        </svg>
    )
}

export default MenuIcon;