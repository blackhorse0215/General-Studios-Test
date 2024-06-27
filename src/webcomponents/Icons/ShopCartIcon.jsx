import {h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

function ShopCartIcon(){

    return(
        <svg className="text-white" width="21" height="19" viewBox="0 0 21 19" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.02864 18.9835C7.89122 18.9835 8.59047 18.2763 8.59047 17.404C8.59047 16.5316 7.89122 15.8245 7.02864 15.8245C6.16606 15.8245 5.4668 16.5316 5.4668 17.404C5.4668 18.2763 6.16606 18.9835 7.02864 18.9835Z" fill="currentColor"></path>
            <path d="M17.9603 18.9835C18.8229 18.9835 19.5221 18.2763 19.5221 17.404C19.5221 16.5316 18.8229 15.8245 17.9603 15.8245C17.0977 15.8245 16.3984 16.5316 16.3984 17.404C16.3984 18.2763 17.0977 18.9835 17.9603 18.9835Z" fill="currentColor"></path>
            <path d="M20.7334 2.83204C20.6237 2.69633 20.4855 2.58702 20.3288 2.51206C20.1721 2.4371 20.0009 2.39836 19.8275 2.39866H4.97299L4.6738 0.681937C4.6419 0.499074 4.5473 0.333427 4.40663 0.214091C4.26596 0.0947559 4.08821 0.0293647 3.9046 0.0294037H0.780919C0.573807 0.0294037 0.375177 0.11261 0.228726 0.260717C0.0822752 0.408825 0 0.609701 0 0.819157C0 1.02861 0.0822752 1.22949 0.228726 1.3776C0.375177 1.5257 0.573807 1.60891 0.780919 1.60891H3.2496L5.47815 14.3822C5.51005 14.565 5.60465 14.7307 5.74532 14.85C5.88599 14.9694 6.06374 15.0348 6.24735 15.0347H18.7421C18.9492 15.0347 19.1478 14.9515 19.2943 14.8034C19.4407 14.6553 19.523 14.4544 19.523 14.245C19.523 14.0355 19.4407 13.8346 19.2943 13.6865C19.1478 13.5384 18.9492 13.4552 18.7421 13.4552H6.90235L6.62708 11.8757H18.4219C18.6927 11.8754 18.9551 11.7804 19.1646 11.6069C19.3742 11.4334 19.518 11.192 19.5718 10.9236L20.9774 3.81578C21.0113 3.64376 21.007 3.46628 20.9648 3.29616C20.9226 3.12604 20.8436 2.96752 20.7334 2.83204Z" fill="currentColor"></path>
        </svg>  
    )
}

export default ShopCartIcon;