import React {useState} from 'react';
import './PokeApiCard.css'
import left from './left.png';
import right from './right.png';
function PokeApiCard() {
const [searchTerm, setSearcTerm] = useState(1);
const [searchNumber, setSearchNumber] = 
  return (
    <div>
        {/* api timer de medio segundo para cambiar el pokemon */}
        {/* usar condiciones si no hay termino usar numero  */}
        <h1>PokeApiCard</h1>
        <div className="searchPanel">
            <div className="controller">
                <img src={left} className="left-arrow arrow"/>
                <div className="apiNumber"></div>
                <div className="portrait"></div>
                <img src={right} className="right-arrow arrow"/> 
            </div>
            <div className="searchInputContainer">
                <input className="searchInput"/>
                <button className="searchButton">Search</button>
            </div>      
        </div>
    </div>
  )
}

export default PokeApiCard