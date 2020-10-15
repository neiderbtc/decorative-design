import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Menu from './components/menu/Menu';
import Contenido from './components/contenido/Contenido';


function App() {
  return (
    <div>
      <div className="container">
          <div className="sidebar">
          <Sidebar />
        </div>

        <div className="contenido background-1">
          <div className="box-menu">
            <Menu />
            <Contenido titulo="01" subtitulo="Design" texto="Decorative in door plants for all your environments"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
