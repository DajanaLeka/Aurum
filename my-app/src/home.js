import React from "react";
import mainimage from './resto.jpg'

var sectionStyle = {
    height: "100vh",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${mainimage})`
};

function Home() {
    return ( 
        <div className="homeSec" style ={ sectionStyle }> 
        <h1> Enjoy delicious desserts at Aurum</h1>
        <button>Book table</button>
        </div> );

    }

    export default Home;