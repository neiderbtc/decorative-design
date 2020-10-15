import React, { useState } from 'react';
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Contenido = ({titulo,subtitulo,texto}) =>{
    const {useContenido, stateContenido} = useState();
    const icon_video = <FontAwesomeIcon icon={faPlayCircle}/>
    const icon_volver = <FontAwesomeIcon icon={faArrowLeft}/>
    const icon_siguiente = <FontAwesomeIcon icon={faArrowRight}/>
    
    return (
        <>
         <div className="texto-principal-box" id="fondo">
            <h1 className="titulo">{titulo}</h1> 
            <h2 className="subtitulo">{subtitulo}</h2> 
            <h2 className="texto-small">{texto}</h2>

            <div className="card-video-box">
                <div className="icon-video">
                    {icon_video}
                </div>
            </div>
                
            <div className="box-btn-next ">
                <div></div>
                <div className="btn-volver text-center bg-gray-1 text-gray-2">
                    {icon_volver}
                </div>
                <div className="circulo-next-galery bg-gray-2"></div>
                <div className="circulo-next-galery bg-gray-1"></div>
                <div className="circulo-next-galery bg-gray-1"></div>
                <div className="btn-siguiente text-gray-1 text-center bg-gray-2">
                    {icon_siguiente}
                </div>
                <div></div>
                <div>
                    <div className="bg-gray-1 text-slider">
                        <div>Slide {icon_siguiente}</div>
                    </div>
                </div>
            </div>

         </div> 
        </>
    )
}

Contenido.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}

export default Contenido;
