import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const  Sidebar = () => {

    const icon_bars = <FontAwesomeIcon icon={faBars} />
    const icon_search = <FontAwesomeIcon icon={faSearch} />
    
    return (
        <div>
            
        <div className="icono-menu text-center mt-3">
                {icon_bars}
            </div>

            <div className="container-redes">
            <div className="redes-sidebar">Facebook</div>
                <div className="redes-sidebar">Twitter</div>
                <div className="redes-sidebar">Instagram</div>
                </div>
            <div className="icono-search text-center">
                {icon_search}
            </div>
        </div>
    )
}


export default Sidebar;