/* 1. Contador Simples: Crie um componente de contador que exibe um número na tela 
e possui dois botões: “Incrementar” e “Decrementar”. Use o hook useState para manter o valor do contador. 
Desafio: adicione uma condição para não permitir que o valor seja menor que zero. */


import React, { useState } from 'react'
import '../css/Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(Math.max(0, count - 1))
    /*Caso o valor de count seja menor que zero, a função Math.max() retornará 0,
    impedindo o decremento para valores negativos*/


    return (
        <div className='counter-div'>
            <h2>Contador Simples</h2>
            <p>Contador: {count}</p>

            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
}

export default Counter
