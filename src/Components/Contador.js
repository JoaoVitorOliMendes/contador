import React from 'react';
import { useState, useEffect } from 'react';

export default function Contador() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [countAll, setCountAll] = useState(0);
    const [countTitle, setCountTitle] = useState(0);

    useEffect(() => {
        switch(countTitle) {
            case 1: document.title = `Você clicou ${count} vezes + 1`;break;
            case 2: document.title = `Você clicou ${count2} vezes + 2`;break;
            case 3: document.title = `Você clicou ${count3} vezes + 3`;break;
        }
        
    });

    return (
        <div className="Aula13">
            
            <p>Quantidade de cliques + 1: {count}</p>
            <button onClick={() => {
                setCount(count + 1)
                setCountAll(countAll + 1)
                setCountTitle(1)
            }}>
                Clique aqui
            </button>

            <p>Quantidade de cliques + 2: {count2}</p>
            <button onClick={() => {
                setCount2(count2 + 2)
                setCountAll(countAll + 1)
                setCountTitle(2)
            }}>
                Clique aqui
            </button>

            <p>Quantidade de cliques + 3: {count3}</p>
            <button onClick={() => {
                setCount3(count3 + 3)
                setCountAll(countAll + 1)
                setCountTitle(3)
            }}>
                Clique aqui
            </button>

            <p>Quantidade de cliques Totais: {countAll}</p>
        </div>
    );
}