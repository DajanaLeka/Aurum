import React from "react";
import strawberrymage from './strawberries.jpg'
import velvetmage from './red-velvet.jpg'
import creamimage from './cream.jpg'



function Menu(props) {
    return ( 
        <div className="menuSec" > 
        <h1>Eat Me</h1>
        <div className="gallery" ><img src={strawberrymage} height={300} width={220} />
        <h4>Cheesecake</h4>  </div>
        <div className="gallery" ><img src={velvetmage} height={300} width={220} />
        <h4>Red Velvet</h4>  </div>
        <div className="gallery" ><img src={creamimage} height={300} width={220} />
        <h4>Cream Cake</h4>  </div>
</div> );

    }

    export default Menu;