import React from 'react';
import {Container} from 'react-bootstrap';
import '../Screens/Screens.css'

const Screens = () => {
    return (
        <>
            <h2 id="s-t">Standard Screen</h2>

            <img src="https://images.unsplash.com/photo-1617914309185-9e63b3badfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" id="main-standard"></img>
        
            <div class="images" id="images">
                <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" id="s-i"></img>
                <img src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" id="s-i"></img>
                <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2luZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" id="s-i"></img>
            </div>

            <div class="separator"></div>

            <h2 id="d-t">Deluxe <i>Director's Box</i> Screen</h2>
            <img src="https://images.unsplash.com/photo-1643553517154-24eb7fd86437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" id="main-deluxe"></img>
            <div class="images">
                <img src="https://images.unsplash.com/photo-1577382144834-8a80d92b925c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" id="d-i"></img>
                <img src="https://images.unsplash.com/photo-1575819974033-21c1faf2adf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80" alt="" id="d-i"></img>
                <img src="https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" id="d-i"></img>
            </div>
        </>
    );
}
export default Screens;