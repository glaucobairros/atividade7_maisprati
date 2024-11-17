/* 4. Temporizador com useEffect: Crie um temporizador que conta o tempo em segundos e exiba na tela.
Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo.
Desafio: adicione botões para pausar e reiniciar o temporizador. */


import React, { useState, useEffect } from "react"
import '../css/Timer.css'

function Timer() {
    const [seconds, setSeconds] = useState(0) // Armazena o tempo em segundos
    const [isRunning, setIsRunning] = useState(true) // Controla o estado do temporizador (ativo ou pausado)

    useEffect(() => {
        let interval = null

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1) // Incrementa o contador a cada segundo
            }, 1000)
        } else {
            clearInterval(interval) // Se o temporizador estiver pausado, limpa o intervalo
        }

        return () => clearInterval(interval) //Limpa o intervalo ao desmontar o componente ou mudar estado do isRunning
    }, [isRunning])

    const toggleTimer = () => setIsRunning(!isRunning) // Função que alterna o estado do temporizador (pausar/retomar)
    
    const resetTimer = () => { //Função para reiniciar o temporizador
        setSeconds(0) // Reseta o contador para zero
        if (!isRunning) {
            setIsRunning(true) //Reinicia a contagem se o temporizador estiver pausado
        }
    }

    return (
        <div className="timer-div">
            <h2>Temporizador</h2>
            <p>Tempo: {seconds} segundos</p>

            <button onClick={toggleTimer}>
                {isRunning ? "Pausar" : "Retomar"} {/* Altera o texto com base no estado */}
            </button>
            <button onClick={resetTimer}>Reiniciar</button>
        </div>
    )
}

export default Timer