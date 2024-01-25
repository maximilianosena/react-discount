
import {useState} from 'react';


export default function App() {
    const [price, setPrice]= useState("$100");
    
    function handleSelect(){
        setPrice("$75")
    }
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={handleSelect}>Apply Discount</button>
        </div>
    );
}
