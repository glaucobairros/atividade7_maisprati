/* 2. Alteração de Cor de Fundo: Crie um componente onde o fundo da página muda de cor cada vez que o usuário
clica em um botão.
Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança. 
Desafio: gere cores aleatórias sempre que o botão for clicado.*/


import React, { useState, useEffect } from "react"
import '../css/ColorChanger.css'

function ColorChanger() {
    const [color, setColor] = useState('#ffffff') /* Estado 'color' inicializa com a cor branca */


    //Função para gerar cor aleatória em hexadecimal
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'

        //Loop para criar uma sequência de 6 caracteres aleatórios a partir dos caracteres presentes em letters
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
            //Math.random gerará um número decimal aleatório entre 0 e 1, que será multiplicado por 16 (letters possui 16 caracteres)
            //Math.floor arredondará para baixo o número gerado (gerando um número entre 0 e 15 que será utilizado como índice para o acesso aos caracteres dentro da string letters)
            //Com base no índice gerado, seleciona um caractere de letters e adiciona na string 'color'
        }
        return color
    }

    //Função para atualizar o estado 'color'com uma nova cor aleatória (gerada na função generateRandomColor)
    const changeColor = () => {
        setColor(generateRandomColor())
    }


    // useEffect para alterar a cor de fundo do body toda vez que o valor de 'color' mudar
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color]) //A dependência 'color' faz com que o useEffect seja executado sempre que 'color' mudar

    return (
        <div className="bgcolor-div">
            <h2>Alteração da Cor de Fundo</h2>
            <p>Cor Atual: {color}</p>
            <button onClick={changeColor}>Mudar Cor de Fundo</button>
        </div>
    )
}

export default ColorChanger