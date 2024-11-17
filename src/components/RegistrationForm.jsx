/* 6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha.
Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas.
Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas.
Desafio: adicione validações para garantir que todos os campos estejam preenchidos antes de enviar. */


import React, { useState } from "react"
import '../css/RegistrationForm.css'

function RegistrationForm() {
    //Estados para armazenar os valores dos campos do formulário
    const [name, setName] = useState('') //Nome do usuário
    const [email, setEmail] = useState('') //E-mail do usuário
    const [password, setPassword] = useState('') //Senha do usuário

    const [welcomeMessage, setWelcomeMessage] = useState('') //Estado para armazenar mensagem de boas-vindas após o envio
    const [error, setError] = useState('')  //Estado para armazenar mensagens de erros de validação

    const handleSubmit = (e) => { //Função executada ao enviar o formuláiro
        e.preventDefault() //Evita o recarregamento da página ao enviar o formulário

        if (!name || !email || !password) { //valida se todos os campos foram preenchidos, e define uma mensagem de erro
            setError('Por favor, preencha todos os campos.')
            return
        }

        setError('') //Limpa a mensagem de erro
        setWelcomeMessage(`Bem-vindo(a), ${name}!`) //Define mensagem de boas-vindas com o nome informado no formulário
    }

    return (
        <div className="registrationForm-div">
            <h2>Formulário de Registro</h2>

            {/* Verifica se há uma mensagem de boas-vindas. Se houver, exibe a mensagem; caso não, exibe o formulário*/}
            {welcomeMessage ? (
                <p>{welcomeMessage}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text"
                            placeholder="Digite seu Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /> {/* Atualiza o estado 'name' ao digitar */}
                    </div>

                    <div>
                        <input type="email"
                            placeholder="Digite seu E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /> {/* Atualiza o estado 'email' ao digitar */}
                    </div>

                    <div>
                        <input type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> {/* Atualiza o estado 'password' ao digitar */}
                    </div>

                    {/* Exibe mensagens de erro, se houver */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button type="submit">Registrar</button>
                </form>
            )}
        </div>
    )
}

export default RegistrationForm