import React from 'react'
import mlog from "../img/logo copie5 copie3.png";
import energy from "../img/aaa.png";
import garbage from "../img/bbb.png";
import gun from "../img/ccc.png";
import code from "../img/code.png";
import code2 from "../img/code2.png";


const Main = () => {
  return (
    <div className='m-container'>
        <img id='mi' src={mlog} alt="" />
        <div id='b1' class="block moving-glow">
            <div class="line">
                <img className='garbage' src={garbage} alt="" />
                <h2 id='mh1' class='lineUp'>Garbage</h2>
            </div>
        </div>
        <div id='b2' class="block moving-glow">
            {/* <div class="line">
                <img className='gun' src={gun} alt="" />
                <h2 id='mh2' class='lineUp'>Gun</h2>
            </div> */}
        </div>
        <div id='b3' class="block moving-glow">
            <div class="line">
                <img className='energy' src={energy} alt="" />
                <h2 id='mh3' class='lineUp'>Energy</h2>
            </div>
        </div>
        <div id='log1' className='mlog'>
            <img src={code} alt="" />
        </div>
        <div id='log2' className='mlog'>
            <img src={code2} alt="" />
        </div>
    </div>
  )
}

export default Main