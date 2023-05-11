import React from 'react';
import '../Resources';

const Screens = () => {
    return (
        <>
            <div class="standard">
                <h2>Standard Screen</h2>
                <img src="/Resources/standardmain.jpg" id="main-standard" alt=""></img>
                <div class="images">
                    <img src="/Resources/standard1.jpg" alt=""></img>
                    <img src="/Resources/standard2.jpg" alt=""></img>
                    <img src="/Resources/standard3.jpg" alt=""></img>
                </div>
            </div>

            <div class="deluxe">
                <h2>Deluxe <i>Director's Box</i> Screen</h2>
                <img src="/Resources/deluxemain.jpg" id="main-deluxe" alt=""></img>
                <div class="images">
                    <img src="/Resources/deluxe1.jpg" alt=""></img>
                    <img src="/Resources/deluxe2.jpg" alt=""></img>
                    <img src="/Resources/deluxe3.jpg" alt=""></img>
                </div>

            </div>
        </>
    );
}
export default Screens;