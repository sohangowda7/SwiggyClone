import React from "react";
import ReactDOM from "react-dom";

const Header = ()=> { 
    return  (
    <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>
    </div> 
    )
}

const AppLayout = () => { 
    return ( 
        <div>
            <Header/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
