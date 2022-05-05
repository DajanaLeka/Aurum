import React from "react";
import abtimage from './aboutimage.jpg'

var sectionStyle = {
    height: "100%",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${abtimage})`
};

function About() {
    return ( 
        <section className="aboutSec" style ={ sectionStyle }>       
        <h1> About us</h1>      
        <p>Desserts provider since 1995  </p> 
        <p>Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. 
            Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex
             ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla 
             pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin
              id est laborun.
              </p> <p className="lastp">  Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor
               incidunt ut labore et dolore nagna aliqua. </p>      
        </section> );

    }

    export default About;