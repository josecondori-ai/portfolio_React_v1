import React from 'react';
import './About.css'
import  pepe  from '../../assets/hombre.jpg'
const About = () => {
    return(
        <div className='contenedorAbout'>
            <img src={ pepe } alt="" className='imagen'/>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio consequuntur iure mollitia sit, laborum voluptatum quia aperiam ipsam quae repellendus soluta. Voluptatibus ullam dolore, dolor alias aspernatur quas architecto?
            Suscipit similique dicta officiis necessitatibus numquam. Nobis impedit eius provident ullam praesentium reiciendis fuga voluptates mollitia eveniet ipsa dolore rerum id laboriosam, dolor facilis perspiciatis odio eaque voluptatum. Vitae, saepe.</p>
            <div className='contenedor'>
                    <button>More About me</button>
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-telegram"></i>
            </div>
            
            </div>
    )
}

export { About }