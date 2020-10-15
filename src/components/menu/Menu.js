import React from 'react'

const Menu = () => {
    return (
        <>
            <ul className="menu">
                <li className="text-center"><a href="#" className="titulo-logo"><span className="text-gray-1">Deco</span><span className="text-gray-2">rative</span></a></li>
                <li className="text-center"><a className="text-gray-1">Home</a></li>
                <li className="text-center"><a href="#" className="text-gray-2">Shop</a></li>
                <li className="text-center"><a href="#" className="text-gray-2">Colections</a></li>
                <li className="text-center"><a href="#" className="text-gray-2">Galley</a></li>
                <li className="text-right">
                    <div className="logo-user">
                        <img className="mr-3" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                </li>
               
            </ul>
        </>
    )
}

export default Menu;