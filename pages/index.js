import { useState } from 'react';

function home () {
    return (
        <div>
            <h1>home</h1>
            <Contador />
        </div>
    )
}

function Contador () {
    const [contador,setContador] = useState(1)

    function adicionarContador() {
        setContador(contador * 5)
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar mais um</button> 
        </div>
    )
}

export default home