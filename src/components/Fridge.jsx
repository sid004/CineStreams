import {useContext} from "react";
import {Fruit} from "../context/VegContext.jsx"



const Fridge = () =>{
    const fru = useContext(Fruit);
    return(
        <div style={{background:"orange", padding: 10}}>
            <h1>Fridge: {fru.name}</h1>
        </div>
    )
}

export default Fridge;