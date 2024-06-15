import React from 'react'
import Navbar from '../headder/Navbar'
import mlog from "../img/logo copie5 copie3.png";
import enemies from "../img/enemies.png"
import map from "../img/map.png"
import generator from "../img/generator.png"


const Gameplay = () => (
    <div>
        <Navbar />
        <img id='gi' src={mlog} alt="" />
        <div className='big-gameplay-container'>
            <div className='gameplay-container'>
                <div className='gameplay-border'> <img className='game-img1' src={enemies} alt="" />
                <h2>Gravity-Gun that pulls trash from a distance</h2>
                </div>
                <div id='img-container1' className='gameplay-border'><img className='game-img1' src={map} alt="" />
                <h2>Big Map to enjoy the game</h2>
                </div>
            </div>
            {/* <div className='gameplay-second-container'>
                <div id='img-game-3' className='gameplay-border'><img className='game-img1' src={generator} alt="" />
                <h2>Generator that turns trash into energy</h2>
                </div>
            </div> */}
        </div>
    </div>
)

export default Gameplay