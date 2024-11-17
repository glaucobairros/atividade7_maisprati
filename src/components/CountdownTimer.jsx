/* 9. Timer com Intervalo e Alerta: Crie um timer onde o usuário define a quantidade de segundos para a contagem 
regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. Use useState para armazenar o tempo e useEffect 
para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando que o tempo acabou. 
Desafio: Adicione botões para pausar e reiniciar o timer. */


import React, { useState, useEffect } from "react"
import '../css/CountdownTimer.css'

function CountdownTimer() {
    const [inputTime, setInputTime] = useState(0) //Estado para armazenar o tempo inserido
    const [time, setTime] = useState(0) //Estado para armazenar o tempo do contador
    const [isRunning, setIsRunning] = useState(false) //Estado para controlar se o timer está rodando ou pausado

    useEffect(() => {
        let interval = null

        if (isRunning && time > 0) { //Se o timer estiver ativo e o tempo for maior que 0 
            interval = setInterval(() => { //Configura um intervalo que decrementa o tempo a cada segundo
                setTime((prevTime) => prevTime - 1)
            }, 1000)
        } else if (time === 0 && isRunning) { //Se o tempo for igual a 0 e o timer estiver ativo
            clearInterval(interval) //Limpa o intervalo
            alert('O tempo acabou!') //Exibe alerta de tempo esgotado 
            setIsRunning(false) //Para o timer
        }

        return () => clearInterval(interval) //Limpa o intervalo sempre que isRunning ou time mudar ou o efeito for desmontado
    }, [isRunning, time])

    //Função para iniciar o timer
    const startTimer = () => {
        // Só define o tempo inicial (com base o valor do input) se o tempo atual for 0
        if (inputTime > 0 && time === 0) {
            setTime(inputTime)
        }
        setIsRunning(true) //Inicia o timer
    }

    //Função para pausar o timer
    const pauseTimer = () => {
        setIsRunning(false) //Para o timer
    }

    //Função para resetar o timer
    const resetTimer = () => {
        setIsRunning(false) //Para o timer
        setTime(0) //Zera o tempo
        setInputTime(0) //Zera o valor do input
    }

    //Função para validar o valor inserido no Input
    const handleInputChange = (e) => {
        const value = Number(e.target.value) //Converte o valor do Input de string para número
        
        if (value >= 0) { // Garante que o valor inserido nunca seja negativo
            setInputTime(value)
        } else {
            setInputTime(0) //Caso seja inserido um número negativo, ele é ajustado para zero
        }
    }

    return (
        <div className="countdownTimer-div">
            <h2>Timer de Contagem Regressiva</h2>

            <div>
                <input
                    type="number"
                    min="0" // Impede valores menores que 0 na interface
                    value={inputTime}
                    onChange={handleInputChange}
                    placeholder="Digite o tempo para regressiva"
                    disabled={isRunning && time !== 0} // Permite editar apenas se o timer não estiver rodando ou estiver resetado
                />
            </div>

            <p>Tempo restante: {time} segundos</p>


            {/* Botões do Timer */}
            {/* Botão Iniciar desabilitado se o tempo estiver rodando ou o valor do input seja zero */}
            <button onClick={startTimer} disabled={isRunning || inputTime <= 0}>Iniciar</button>

             {/* Botão Pausar desabilitado se o timer não estiver rodando */}
            <button onClick={pauseTimer} disabled={!isRunning}>Pausar</button>
            <button onClick={resetTimer}>Reiniciar</button>
        </div>
    )
}

export default CountdownTimer