import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
    
    
function App() {
  const [currentColor, setNewColor] = useState([]);
  
  const boxColor = ( newColor ) => {
      setNewColor( [...currentColor, newColor ]);
  }
  
  return (
      <>
        <Form onNewColor={boxColor} />
        <div className="d-flex flex-wrap">{
          currentColor.map((color,i) =>
          <Display key={i} color={color} />
          )
        }
        </div>
      </>
  );
}
    
export default App;
