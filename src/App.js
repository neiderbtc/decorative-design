import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Menu from './components/menu/Menu';


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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
