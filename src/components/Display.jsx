import react, { useState } from 'react';
    
    
const Display = (props) => {
    return (
        <>
            <div className="m-4" style={{backgroundColor: props.color, width: 200, height:200 }}></div>
        </>
    );
};
    
export default Display;