import react, { useState } from 'react';
    
    
const Taps = props => {

    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        setColor('');
    };
    
    return (
        <div className="d-flex m-3">
            <h3>Color</h3>
            <form onSubmit={ handleSubmit }>
                <input 
                    className="group-control bg-light border-0 rounded mx-3 p-2 pr-5 align-middle"
                    type="text"
                    onChange={ (e) => setColor(e.target.value)}
                    value={ color }
                />
                <input className="btn btn-light px-4 border" type="submit" value="Add" />
            </form>
        </div>
    );
}
    
export default Taps;