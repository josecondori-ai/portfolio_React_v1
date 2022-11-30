import React from 'react';
import './Hero.css'

const Hero = () => {
    return(
        <div className='contenedorHero'>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
            <div>
                <button>My portfolio</button>
                <button>Say hello</button>
            </div>

        </div>
    )
}

export { Hero }