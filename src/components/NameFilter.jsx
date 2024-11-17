/* 5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes.
Adicione um campo de entrada para filtrar os nomes com base no texto digitado.
Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro.
Desafio: ignore maiúsculas e minúsculas ao filtrar. */


import React, { useState } from "react"
import '../css/NameFilter.css'

function NameFilter() {
    const [filterText, setFilterText] = useState('') //useState para armazenar o texto digitado no campo de filtro

    //Array de nomes
    const names = ["Joelson", "Jaques", "Bruno", "Maria", "Glauco", "Eduardo", "José", "Lucas", "Manoel"]

    //Filtra os nome com base no texto digitado
    //toLowerCase converte o texto e os nomes para letras minúsculas
    //includes() verifica se o texto está presente em cada nome 
    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(filterText.toLowerCase())
    )

    return (
        <div className="nameFilter-div">

            <h2>Filtro de Lista de Nomes</h2>

            <input
                type="text"
                placeholder="Digite o nome a ser filtrado"
                value={filterText} // valor do campo de entrada controlado pelo estado "filterText"
                onChange={(e) => setFilterText(e.target.value)} //atualiza o estado "filterText" sempre que mudar o valor
            />
            {/* Lista de nomes filtrados */}
            <ul>
                {/* Para cada nome filtrado cria um item de lista */}
                {filteredNames.map((name, index) => (
                    <li key={index}>
                        {name} {/* Exibe o nome */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NameFilter

