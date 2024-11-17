/* 10. Componentes com Tabs Navegáveis: Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente 
ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”). Use useState para controlar qual aba está ativa 
e renderize o conteúdo de acordo com a aba selecionada. Desafio: Adicione um efeito visual que destaque a aba ativa. */


import React, { useState } from 'react'
import '../css/Tabs.css'

function Tabs() {
    // O estado 'activeTab' controla qual aba está ativa
    const [activeTab, setActiveTab] = useState('about') // 'About' é a aba inicial

    //Função que retorna o conteúdo com base na aba que está ativa
    const renderContent = () => {
        switch (activeTab) { //Uso do switch para verificar a aba ativa e renderizar o conteúdo correspondente
            case 'about':
                return <p>Esta é a aba "Sobre".</p>
            case 'contact':
                return <p>Esta é a aba "Contato".</p>
            default:
                return <p>Selecione uma aba.</p>
        }
    }

    return (
        <div className="tabs-div">
            <h2>Tabs Navegáveis</h2>
            <div className="tabs-container">
                {/* Botão aba About */}
                <button 
                    onClick={() => setActiveTab('about')} //Ao ser clicado, define a aba ativa como "About"
                    className={`tab-btn ${activeTab === 'about' ? 'active' : 'inactive'}`} //Define a classe dinamicamente de acordo com a aba ativa
                >
                    About
                </button>
                {/* Botão aba Contact */}
                <button
                    onClick={() => setActiveTab('contact')} //Ao ser clicado, define a aba ativa como "Contact"
                    className={`tab-btn ${activeTab === 'contact' ? 'active' : 'inactive'}`} //Define a classe dinamicamente de acordo com a aba ativa
                >
                    Contact
                </button>
            </div>

            <div className="tab-content">
                {renderContent()} {/* chama a função renderContent para mostrar o conteúdo da aba ativa */}
            </div>
        </div>
    )
}

export default Tabs
